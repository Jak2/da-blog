function CodeBlock({ code, language }) {
    return (
      <div className="bg-gray-900 rounded-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="text-xs text-gray-400">{language}</div>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-gray-300 text-sm font-mono">
            {code}
          </code>
        </pre>
      </div>
    );
  }
  
  export default CodeBlock;