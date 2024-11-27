"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Karakana Outlets</h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="px-4">Home</Link>
          <Link href="/about-us" className="px-4">About Us</Link>
          <Link href="/services" className="px-4">Services</Link>
          <Link href="/management" className="px-4">Management</Link>
          <Link href="/clients" className="px-4">Clients</Link>
          <Link href="/contact-us" className="px-4">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="px-4">Home</Link>
            <Link href="/About-Us" className="px-4">About Us</Link>
            <Link href="/Services" className="px-4">Services</Link>
            <Link href="/Management" className="px-4">Management</Link>
            <Link href="/Clients" className="px-4">Clients</Link>
            <Link href="/Contact-Us" className="px-4">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
