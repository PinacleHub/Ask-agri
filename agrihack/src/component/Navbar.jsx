import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">AgroTech</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:bg-green-600 px-3 py-2 rounded-md">Home</a>
              <a href="/about" className="hover:bg-green-600 px-3 py-2 rounded-md">About</a>
              <a href="/services" className="hover:bg-green-600 px-3 py-2 rounded-md">Services</a>
              <a href="/login" className="bg-green-600 px-4 py-2 rounded-md ml-4">Login</a>
              <a href="/signup" className="bg-white text-green-700 px-4 py-2 rounded-md">Sign Up</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:bg-green-600 px-3 py-2 rounded-md">Home</a>
            <a href="/about" className="block hover:bg-green-600 px-3 py-2 rounded-md">About</a>
            <a href="/services" className="block hover:bg-green-600 px-3 py-2 rounded-md">Services</a>
            <a href="/login" className="block bg-green-600 px-3 py-2 rounded-md mt-4">Login</a>
            <a href="/signup" className="block bg-white text-green-700 px-3 py-2 rounded-md mt-2">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
}