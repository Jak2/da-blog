/**
 * Content to Astro Page Generator
 *
 * This script scans the content directory and automatically generates
 * or updates corresponding Astro pages in the pages directory.
 *
 * Usage: node src/scripts/generate-pages.js
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// Get the current directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define paths
const contentDir = path.join(__dirname, "..", "content")
const pagesDir = path.join(__dirname, "..", "pages")

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`📁 Created directory: ${dirPath}`)
  }
}

// Function to generate an Astro page for a Markdown file
function generateMdPage(contentPath, pagePath) {
  const relativePath = path.relative(contentDir, contentPath)
  const importPath = "../content/" + relativePath

  // Calculate the depth for proper import paths
  const depth = pagePath.split(path.sep).length - pagesDir.split(path.sep).length
  const layoutImport = "../".repeat(depth) + "layouts/MainLayout.astro"

  const template = `---
import MainLayout from '${layoutImport}';

// Get the current path for active link highlighting
const currentPath = Astro.url.pathname;

// Get the content and headings
const contentFiles = import.meta.glob('../content/**/*.md');
const contentModule = await contentFiles['${importPath}']();
const Content = contentModule.Content;
const headings = contentModule.getHeadings ? contentModule.getHeadings() : [];

// Extract title from the first heading or use the filename
const title = headings.length > 0 ? headings[0].text : '${path.basename(contentPath, ".md")}';
---

<MainLayout title={title + " - Portfolio"} headings={headings} currentPath={currentPath}>
  <Content />
</MainLayout>
`

  fs.writeFileSync(pagePath, template)
  console.log(`📄 Generated Astro page for MD: ${pagePath}`)
}

// Function to generate an Astro page for an HTML file
function generateHtmlPage(contentPath, pagePath) {
  const relativePath = path.relative(contentDir, contentPath)
  const importPath = "../content/" + relativePath

  // Calculate the depth for proper import paths
  const depth = pagePath.split(path.sep).length - pagesDir.split(path.sep).length
  const layoutImport = "../".repeat(depth) + "layouts/MainLayout.astro"

  const template = `---
import MainLayout from '${layoutImport}';

// Get the current path for active link highlighting
const currentPath = Astro.url.pathname;

// Import the HTML content
import htmlContent from '${importPath}';

// Create a function to extract headings from HTML
function extractHeadings(html) {
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\\1>/g;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, ''); // Remove any HTML tags inside heading
    const slug = text.toLowerCase().replace(/[^\\w\\s]/g, '').replace(/\\s+/g, '-');
    
    headings.push({ depth: level, slug, text });
  }
  
  return headings;
}

// Extract headings from the HTML content
const headings = extractHeadings(htmlContent);

// Extract title from the first heading or use the filename
const title = headings.length > 0 ? headings[0].text : '${path.basename(contentPath, ".html")}';
---

<MainLayout title={title + " - Portfolio"} headings={headings} currentPath={currentPath}>
  <Fragment set:html={htmlContent} />
</MainLayout>
`

  fs.writeFileSync(pagePath, template)
  console.log(`📄 Generated Astro page for HTML: ${pagePath}`)
}

// Function to process a content file
function processContentFile(contentPath) {
  // Skip files that start with an underscore or dot
  const basename = path.basename(contentPath)
  if (basename.startsWith("_") || basename.startsWith(".")) {
    return
  }

  // Determine the corresponding page path
  const relativePath = path.relative(contentDir, contentPath)
  let pagePath

  // Special case for home.html
  if (relativePath === "html/home.html") {
    pagePath = path.join(pagesDir, "index.astro")
  } else {
    // Replace the extension with .astro
    const pageRelativePath = relativePath.replace(/\.(md|html)$/, ".astro").replace(/^html\//, "") // Remove html/ prefix if present

    pagePath = path.join(pagesDir, pageRelativePath)
  }

  // Ensure the directory exists
  ensureDirectoryExists(path.dirname(pagePath))

  // Generate the appropriate page based on file extension
  const ext = path.extname(contentPath).toLowerCase()
  if (ext === ".md") {
    generateMdPage(contentPath, pagePath)
  } else if (ext === ".html") {
    generateHtmlPage(contentPath, pagePath)
  }
}

// Function to recursively process a directory
function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      processDirectory(fullPath)
    } else {
      processContentFile(fullPath)
    }
  }
}

// Main execution
console.log("🚀 Starting page generation...")
processDirectory(contentDir)
console.log("✅ Page generation complete!")
