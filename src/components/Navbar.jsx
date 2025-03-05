import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, toggleTheme }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] dark:bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white dark:text-black">
            Arjun<span className="text-blue-500">.Veer</span>
          </a>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="py-2 px-4 rounded bg-blue-500 text-white"
            >
              Toggle Theme
            </button>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
