# 🚀 Simple Dynamic Blog with Markdown Content

This is a simple blog built with HTML, CSS, and JavaScript that dynamically loads content from Markdown files. It features a navigation bar (implicitly part of the main structure), a sidebar for topic navigation, and a central area to display the selected content.

## Core Idea
```java
A central sidebar.json file: This file defines the navigation structure of your blog, including top-level items and nested dropdowns, with each link associated with a "slug".
Topic-specific JSON files: Located in data/topics/, these files (e.g., introduction.json, tech/python.json) contain metadata for each topic, including the title and the filename of the corresponding content file.
Markdown content files: Located in data/pages/, these .md files contain the actual content for each topic, which is then converted to HTML for display.
Dynamic loading: JavaScript (script.js) is used to fetch the sidebar data, generate the navigation dynamically, and load the content for the selected topic on demand, updating the content area of the page.
```

## 📂 Project Structure --

```c++
your-blog-folder/
├── css/
│   └── style.css    🎨 (Optional) CSS file for styling.
├── data/
│   ├── pages/         ➡️ Folder containing the Markdown content files.
│   │   ├── css-styling.md   📜 Markdown content for CSS Styling.
│   │   ├── introduction.md     📜 Markdown content for Introduction.
│   │   └── myportfolio.md    📜 Markdown content for My Portfolio.
│   └── topics/        ➡️ Folder containing the metadata JSON files.
│       ├── css-styling.json   📝 Metadata for CSS Styling post.
│       ├── introduction.json   📝 Metadata for Introduction post.
│       ├── javascript-basics.json 📝 Metadata for JavaScript Basics post.
│       ├── myportfolio.json    📝 Metadata for My Portfolio page.
│       └── sidebar.json   🔗 Configuration for the sidebar links.
├── js/
│   └── script.js    ⚙️ JavaScript file for dynamic content loading.
├── index.html         📄 Main HTML file containing the structure.
└── readme.md          ℹ️ This README file.
```

## 🛠️ Setup

1.  **Download or Clone the Project:**
    If you have the project files in a repository, clone it to your local machine. Otherwise, ensure you have the file structure as described above.

2.  **Set up a Local Web Server:**
    Due to browser security restrictions when accessing local files directly, it's recommended to use a simple local web server for development.

    * **Using Python (Recommended):**
        1.  Open your terminal or command prompt.
        2.  Navigate to the root directory of your `your-blog-folder` (the one containing `index.html`).
        3.  Run the command:
            ```bash
            python -m http.server 8000  # For Python 3
            # OR
            python -m SimpleHTTPServer 8000 # For Python 2
            ```
        4.  Open your web browser and go to `http://localhost:8000/`.

    * **Using `npx serve` (Requires Node.js):**
        1.  If you have Node.js and npm installed, you can use `npx serve`.
        2.  Open your terminal or command prompt, navigate to the project root, and run:
            ```bash
            npx serve
            ```
        3.  The server will usually start on a port like `http://localhost:3000/`. Check your terminal output.

3.  **Open in Browser:** Once the server is running, open your web browser and navigate to the appropriate address (usually `http://localhost:8000/` or `http://localhost:3000/`).

## ⚙️ Configuration

### `data/sidebar.json`

This file configures the links that appear in your sidebar navigation. It's a JSON array of objects, where each object represents a link:

```json
[
  {
    "name": "Link Text",  ➡️ The text displayed in the sidebar.
    "slug": "unique-identifier" ➡️ A unique identifier that matches the filename (without extension) of the corresponding topic JSON file in `data/topics/`.
  },
  {
    "name": "Another Link",
    "slug": "another-identifier"
  },
  // ... more links
]
```

To add a new link to the sidebar, simply add a new object to this array with the desired `name` and a unique `slug`.

### `data/topics/`

This folder contains the metadata JSON files for your blog posts. Each JSON file contains metadata about the blog post, including its title and the filename of the Markdown content located in the `data/pages/` folder.

```json
{
  "title": "Post Title",          ➡️ The title displayed at the top of the content area.
  "contentFile": "markdown-file.md", ➡️ The filename of the Markdown file for this post (located in `data/pages/`).
  "slug": "unique-identifier"    ➡️ Must match the slug in `sidebar.json`.
}
```

**Example `data/topics/` Contents:**

* `css-styling.json`: Links to `../pages/css-styling.md`.
* `introduction.json`: Links to `../pages/introduction.md`.
* `javascript-basics.json`: Links to `../pages/javascript-basics.md`.
* `myportfolio.json`: Links to `../pages/myportfolio.md`.

### `data/pages/` ➡️ Markdown Content Files

This folder contains the actual content of your blog posts written in Markdown syntax. The filenames here should match the `contentFile` value specified in the corresponding JSON file within the `data/topics/` folder.

**Example `data/pages/` Contents:**

* `css-styling.md`: Content for CSS Styling.
* `introduction.md`: Content for Introduction.
* `myportfolio.md`: Content for My Portfolio.

## ✍️ Adding New Content

To add a new blog post:

1.  **Create a New Markdown File:**
    * Navigate to the `data/pages/` folder. ➡️ **UPDATED PATH**
    * Create a new file with a descriptive name ending in `.md` (e.g., `new-post.md`).
    * Write your blog post content in this file using Markdown.

2.  **Create a New Metadata JSON File:**
    * In the `data/topics/` folder, create a new JSON file with the same base name as your Markdown file (the `slug`), ending in `.json` (e.g., `new-post.json`).
    * Open this JSON file and add the following structure, replacing the values with your post's information:

        ```json
        {
          "title": "Title of Your New Post",
          "contentFile": "new-post.md",  ➡️ Make sure this matches your Markdown filename in `data/pages/`.
          "slug": "new-post"            ➡️ A unique identifier for this post.
        }
        ```

3.  **Update `sidebar.json`:**
    * Open the `data/sidebar.json` file.
    * Add a new object to the array with the `name` you want to appear in the sidebar and the `slug` you used in the metadata JSON file:

        ```json
        [
          // ... other links
          {
            "name": "New Post Link Text", ➡️ The text for your new link.
            "slug": "new-post"           ➡️ Must match the slug in your JSON file.
          }
        ]
        ```

4.  **Refresh Your Browser:** Save all the changes and refresh your blog in the web browser. The new link should appear in the sidebar, and clicking it should load your new content.

Ensure that the `contentFile` path in your JSON is just the filename of the Markdown file, as the JavaScript will likely be fetching it from the `data/pages/` folder based on how you've structured your `loadTopic` function.

Enjoy your simple dynamic blog with the organized `pages` folder! 🎉
```
