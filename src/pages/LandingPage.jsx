import React from "react";
import NavBar from "../components/NavBar";

export default function Main() {
  return (
    <div className="bg-blue-900 mt-16">
      <NavBar />
      <div className="flex flex-col justify-center items-center ">
        <img src="/inicio.png" alt="Inicio" />
        <img className="mt-4" src="/marcasinicio1.png" alt="marcas" />
      </div>
      <div className="flex items-center justify-evenly">
        <span className="text-white z-20 w-1/4">
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
        <img className="h-[300px]" src="/formosa.png" alt="formosa" />
      </div>
    </div>
  );
}
