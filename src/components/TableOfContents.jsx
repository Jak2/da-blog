function TableOfContents({ headings = [], url = "" }) {
  // Extract URLs from the content
  const extractUrls = () => {
    const links = document.querySelectorAll(".prose a")
    return Array.from(links).map((link) => ({
      text: link.textContent,
      url: link.getAttribute("href"),
    }))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>

      {/* Headings Section */}
      {headings && headings.length > 0 && (
        <>
          <h3 className="text-xl mb-3">Headings</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            {headings.map((heading, index) => (
              <li key={index}>
                <a href={`#${heading.slug}`} className="hover:underline">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* URLs Section - This will be populated client-side */}
      <div id="url-section">
        <h3 className="text-xl mb-3">Links</h3>
        <ul className="list-disc pl-5 space-y-2" id="url-list">
          {/* URLs will be populated here via client-side JS */}
        </ul>
      </div>
    </div>
  )
}

export default TableOfContents
