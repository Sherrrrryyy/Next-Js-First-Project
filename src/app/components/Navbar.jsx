"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.css';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-full h-16 font-semibold text-green-950 border-black flex items-center justify-around px-4 md:px-10 shadow-md relative z-20">
      <Link href="/">
        <p className="text-3xl p-3 cursor-pointer">Baggy</p>
      </Link>
      <ul className="hidden md:flex space-x-6">
        <Link href="/Products">
          <li className="hover:underline cursor-pointer">Home</li>
        </Link>
        <Link href="/Aboutus">
          <li className="hover:underline cursor-pointer">New Arrival</li>
        </Link>
        <Link href="/Aboutus">
          <li className="hover:underline cursor-pointer">Sale</li>
        </Link>
        <Link href="/Aboutus">
          <li className="hover:underline cursor-pointer">Best Sellers</li>
        </Link>
      </ul>

      <div className='flex gap-10'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>

      <div className="md:hidden absolute left-5 justify-evenly text-green-950" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {isOpen && (
        <div
          className="text-green-950 top-16 left-0 w-full flex flex-col items-center py-4 shadow-lg space-y-4 fixed z-50"
        >
          <Link href="/Products" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Home</p>
          </Link>
          <Link href="/Aboutus" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">New Arrival</p>
          </Link>
          <Link href="/ContactUs" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Sale</p>
          </Link>
          <Link href="/Journey" onClick={toggleMenu}>
            <p className="hover:underline cursor-pointer">Best Sellers</p>
          </Link>
        </div>
      )}
    </div>
  );
}
