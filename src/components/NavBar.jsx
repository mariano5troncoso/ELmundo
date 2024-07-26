import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Marcas', href: '/Marcas' },
  { name: 'Sucursales', href: '/Sucursales' },
  { name: 'Eventos', href: '/Eventos' },
  { name: 'Contactos', href: '/Contactos' },
];

export default function NavBar({ cartItems = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      <header className="fixed inset-x-0 top-0 z-50 bg-blue-950">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="http://distribuidoramundo.com.ar/wp-content/uploads/2016/12/distri.png"
                alt=""
              />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 color-white`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden absolute inset-x-0 top-20 bg-blue-950`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-center py-2 px-4 text-white hover:bg-slate-300 hover:bg-opacity-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 rounded py-2 px-3 text-white hover:bg-slate-300 hover:bg-opacity-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Link to="/CartPage" className="text-white">
              <FiShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
