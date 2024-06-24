import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const rotate = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 1 } },
};

const Section = ({ children, variants }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Main() {
  return (
    <div className="bg-blue-900 mt-16">
      <NavBar />
      
      <div className="flex flex-col justify-center items-center">
        <Section variants={slideIn}>
          <div className="flex justify-center">
            <img
              className="mt-4 hidden xl:block w-2/3"
              src="/Distribuidora.jpg"
              alt="Distribuidora"
            />
          </div>
        </Section>
        <Section variants={scaleUp}>
          <img src="/inicio.png" alt="Inicio" />
        </Section>
        <Section variants={rotate}>
          <img
            className="mt-4 hidden lg:block xl:hidden"
            src="/tablet.png"
            alt="marcas"
          />
        </Section>
        <Section variants={fadeIn}>
          <img className="mt-4 hidden xl:block" src="/nuevasmarcas.png" alt="marcas" />
        </Section>
        <Section variants={slideIn}>
          <img
            className="mt-4 hidden lg:block xl:hidden"
            src="/mobile.png"
            alt="marcas"
          />
        </Section>
      </div>

      <Section variants={fadeIn}>
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
      </Section>

      <Section variants={slideIn}>
        <div className="flex items-center justify-evenly p-4">
          <img className="h-[300px]" src="/resistencia.png" alt="resistencia" />
          <span className="text-white z-20 w-1/3">
            Desde el 2014 abrimos un taller de Instalación Automotriz Profesional
            de nombre “Pro-Car”, donde entre otros servicios somos instaladores
            oficiales de Cristales Pilkington (originales en terminales), así como
            también instalación de autopartes en general, todo contando con el
            personal idóneo y capacitado para cada caso, brindándole una solución
            a cada cliente en particular. También desde Resistencia mayor a través
            de “El Mundo Distribuidora” en las ventas mayoristas el cual desarrolla
            sus actividades comerciales en las provincias de Formosa, Chaco,
            Corrientes, Misiones, Santa Fe, Tucumán, Santiago del Estero,
            Catamarca, Salta y Jujuy, es decir, toda la región Noreste y Noroeste
            de la Argentina.
          </span>
        </div>
      </Section>

      <Section variants={scaleUp}>
        <div className="flex items-center justify-evenly p-4">
          <img className="h-[250px]" src="/pro-car.jpg" alt="pro-car" />
          <span className="text-white z-20 w-1/3">
            Contando con una cartera de clientes que asciende a más 350 comercios y
            que son atendidos por 3 viajantes, Distribuidora El Mundo es uno de los
            diez Distribuidores Oficiales de “Dayco Argentina S.A”, tanto en el
            rubro automotor como en el industrial en la Argentina, así como también
            ofrece otros productos de reconocida trayectoria y calidad ajustadas a
            las normativas ISO como ser FRIC-ROT-MONROE, MANGUERAS CAUPLAS, BTP,
            RSF, FILTREX, GENNY, MOURA, TRICO, CABLES AF, CAUPLAS entre otros, y la
            distribución Regional exclusiva en toda la provincia de Formosa de
            LUBRICANTES TOTAL-ELF.
          </span>
        </div>
      </Section>

      <Section variants={slideIn}>
        <div className="flex items-center justify-evenly p-4 mt-10">
          <p className="text-white text-center text-xl font-bold mb-4">VISION</p>
          <span className="text-white z-20 w-2/3">
            Ser una Empresa Líder y de Permanente Adaptación en el Mercado
            Argentino, dedicada y enfocada en proveer soluciones integrales al
            sector automotriz a través de una amplia red de distribución de
            elementos de alta rotación.
          </span>
        </div>
      </Section>

      <Section variants={slideIn}>
        <div className="flex items-center justify-evenly p-4">
          <p className="text-white text-center text-xl font-bold mb-4">MISION</p>
          <span className="text-white z-20 w-2/3">
            Desarrollar procesos de comercialización de productos de calidad,
            reconocimiento y normativas, con capacidad de respuesta en el plazo que
            establezca nuestro compromiso con el cliente minorista. Atendiendo las
            necesidades de información y reposición del mercado de autopartes, a
            través de personal capacitado conocedor de la tecnología en uso,
            políticas claras de comercialización, atención y seguimiento al
            cliente.
          </span>
        </div>
      </Section>

      <Section variants={fadeIn}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-xl font-bold text-center p-4">
          <div className="border p-4">• Servicio y Experiencia</div>
          <div className="border p-4">• Calidad y Trayectoria</div>
          <div className="border p-4">• Seriedad y Compromiso</div>
          <div className="border p-4">• Innovación y Soluciones</div>
        </div>
      </Section>
    </div>
  );
}
