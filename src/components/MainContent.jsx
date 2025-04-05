import { useState } from 'react';
import CodeBlock from './CodeBlock';

function MainContent({ posts }) {
  const codeExample1 = `import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);`;

  const codeExample2 = `import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component`;

  const codeExample3 = `const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "Mustang", price: 53000, electric: false }
  ]);
}`;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-md mb-6 flex items-start">
        <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            To minimize bundle size, only register the modules you want to use. See the 
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Modules</a> docs for more information.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <div className="flex items-center mb-4">
          <span className="text-gray-500 dark:text-gray-400 mr-2">3</span>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Import the React Data Grid</h2>
        </div>
        
        <CodeBlock code={codeExample1} language="javascript" />
        <div className="mt-4">
          <CodeBlock code={codeExample2} language="javascript" />
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center mb-4">
          <span className="text-gray-500 dark:text-gray-400 mr-2">4</span>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Define Rows and Columns</h2>
        </div>
        
        <CodeBlock code={codeExample3} language="javascript" />
      </section>

      {posts?.map((post, index) => (
        <article key={index} className="mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <a href={`/post/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
        </article>
      ))}
    </div>
  );
}

export default MainContent;