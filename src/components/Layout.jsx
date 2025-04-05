import Header from './Header';
import Sidebar from './Sidebar';
import QuickStart from './QuickStart';

function Layout({ children, toggleDarkMode, darkMode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-6 md:px-8">
          {children}
        </main>
        <QuickStart />
      </div>
    </div>
  );
}

export default Layout;