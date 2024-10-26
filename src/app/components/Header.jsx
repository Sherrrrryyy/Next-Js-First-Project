"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-full h-16 font-semi-bold text-green-950 flex items-center justify-between px-4 md:px-10">
      <Link href="/">
        <p className="text-3xl p-3 cursor-pointer">Baggy</p>
      </Link>

      <ul className="hidden md:flex space-x-6">
        <Link href="/Products">
          <li className="hover:underline cursor-pointer">Products</li>
        </Link>
        <Link href="/Aboutus">
          <li className="hover:underline cursor-pointer">About us</li>
        </Link>
        <Link href="/ContactUs">
          <li className="hover:underline cursor-pointer">Contact us</li>
        </Link>
        <Link href="/Journey">
          <li className="hover:underline cursor-pointer">Our Journey</li>
        </Link>
      </ul>

      <div className="md:hidden text-red-950" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {isOpen && (
        <div className="text-red-950 fixed top-16 left-0 w-full bg-gray-250 flex flex-col items-center py-4 shadow-lg space-y-4">
          <Link href="/Products" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Products</p>
          </Link>
          <Link href="/Aboutus" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">About us</p>
          </Link>
          <Link href="/ContactUs" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Contact us</p>
          </Link>
          <Link href="/Journey" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Our Journey</p>
          </Link>
        </div>
      )}
    </div>
  );
}
