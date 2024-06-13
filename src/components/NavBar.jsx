import React from 'react';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Marcas', href: '/Marcas' },
  { name: 'Sucursales', href: '/Sucursales' },
  { name: 'Eventos', href: '#' },
  { name: 'Tienda Online', href: '#' },
  { name: 'Contactos', href: '/Contactos' },
];

export default function NavBar() {
  return (
    <div className="">
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
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
            </button>
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
        </nav>
      </header>
    </div>
  );
}
