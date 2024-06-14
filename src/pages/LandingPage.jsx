import React from "react";
import NavBar from "../components/NavBar";

export default function Main() {
  return (
    <div className="bg-blue-900 mt-16">
      <NavBar />
      
      <div className="flex flex-col justify-center items-center">
        <img src="/inicio.png" alt="Inicio" />
        <img className="mt-4 hidden lg:block xl:hidden" src="/tablet.png" alt="marcas" />
        <img className="mt-4 hidden xl:block" src="/nuevasmarcas.png" alt="marcas" />
        <img className="mt-4 hidden lg:block xl:hidden" src="/mobile.png" alt="marcas" />
        <img className="mt-4 hidden xl:block" src="/Distribuidora.jpg" alt="Distribuidora" />
      </div>
      
      <div className="flex items-center justify-evenly mt-5">
        <img className="h-[300px]" src="/formosa.png" alt="formosa" />
        <span className="text-white z-20 w-1/3">
          Nuestra empresa es Argentina y cuenta con la siguiente estructura: En
          Formosa (Región Noreste de Argentina) y desde hace más de 40 años
          operamos bajo el nombre de “Todo Ford” y desde el 2016 bajo el nombre
          de “El Mundo Del Repuesto (Sucursal Formosa)”; se comercializan
          repuestos, autopartes, lubricantes, piezas, accesorios para todas las
          marcas de vehículos nacionales e importados, ropas y calzados de
          trabajo y de seguridad. También en la ciudad de Resistencia provincia
          del Chaco, la sucursal “El Mundo del Repuesto”, dedicado también a la
          venta de repuestos, autopartes, lubricantes, piezas y accesorios
          automotores.
        </span>
      </div>
      
      <div className="flex items-center justify-evenly p-4">
        <img className="h-[300px]" src="/resistencia.png" alt="resistencia" />
        <span className="text-white z-20 w-1/3">
          Desde el 2014 abrimos un taller de Instalación Automotriz Profesional de nombre “Pro-Car”, donde entre otros servicios somos instaladores oficiales de Cristales Pilkington (originales en terminales), así como también instalación de autopartes en general, todo contando con el personal idóneo y capacitado para cada caso, brindándole una solución a cada cliente en particular.
          También desde Resistencia mayor a través de “El Mundo Distribuidora” en las ventas mayoristas el cual desarrolla sus actividades comerciales en las provincias de Formosa, Chaco, Corrientes, Misiones, Santa Fe, Tucumán, Santiago del Estero, Catamarca, Salta y Jujuy, es decir, toda la región Noreste y Noroeste de la Argentina.
        </span>
      </div>
      
      <div className="flex items-center justify-evenly p-4">
        <img className="h-[250px]" src="/pro-car.jpg" alt="pro-car" />
        <span className="text-white z-20 w-1/3">
          Contando con una cartera de clientes que asciende a más 350 comercios y que son atendidos por 3 viajantes, Distribuidora El Mundo es uno de los diez Distribuidores Oficiales de “Dayco Argentina S.A”, tanto en el rubro automotor como en el industrial en la Argentina, así como también ofrece otros productos de reconocida trayectoria y calidad ajustadas a las normativas ISO como ser FRIC-ROT-MONROE, MANGUERAS CAUPLAS, BTP, RSF, FILTREX, GENNY, MOURA, TRICO, CABLES AF, CAUPLAS entre otros, y la distribución Regional exclusiva en toda la provincia de Formosa de LUBRICANTES TOTAL-ELF.
        </span>
      </div>
    </div>
  );
}
