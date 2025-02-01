import { useState } from "react";
import { X } from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-gray-600 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo">
          <a href="/" className="text-4xl font-semibold text-white pl-8">
            <span className="text-yellow-500">G</span> Interior
          </a>
        </div>

        <button onClick={toggleMobileMenu} className="lg:hidden text-white">
          ☰
        </button>

        <nav className="hidden lg:flex space-x-8">
          <a href="/" className="text-white text-lg hover:text-yellow-500">Home</a>
          <a href="/about" className="text-white text-lg hover:text-yellow-500">About</a>
          <a href="/service" className="text-white text-lg hover:text-yellow-500">Services</a>
          <a href="/Projects" className="text-white text-lg hover:text-yellow-500">Project</a>
          <a href="/Contact" className="text-white text-lg hover:text-yellow-500">Contact</a>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-20 p-6 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="logo mb-6">
          <a href="/" className="text-4xl font-semibold text-white">
            <span className="text-yellow-500">G</span> Interior
          </a>
        </div>
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white">
          <X size={24} />
        </button>
        <ul className="mt-6 space-y-6">
          <li>
            <a href="/" className="text-white text-lg block hover:text-yellow-500">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white text-lg block hover:text-yellow-500">About</a>
          </li>
          <li>
            <a href="/service" className="text-white text-lg block hover:text-yellow-500">Services</a>
          </li>
          <li>
            <a href="/Projects" className="text-white text-lg block hover:text-yellow-500">Project</a>
          </li>
          <li>
            <a href="/Contact" className="text-white text-lg block hover:text-yellow-500">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
