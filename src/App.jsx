import { useState } from 'react';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import { blogPosts } from './data/blogData';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <MainContent posts={blogPosts} />
      </Layout>
    </div>
  );
}

export default App;