import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
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

const ContactInfo = ({ title, address, phone1, phone2, phone3, email1, email2, email3, facebook }) => (
  <div className="bg-white bg-opacity-80 shadow-md rounded-lg p-6 m-4 max-w-full break-words font-sans transition duration-300 transform hover:shadow-xl hover:scale-105">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2 text-lg" />{address}</p>
    {phone1 && <p className="flex items-center mb-2"><FaPhone className="mr-2 text-lg" />{phone1}</p>}
    {phone2 && <p className="flex items-center mb-2"><FaPhone className="mr-2 text-lg" />{phone2}</p>}
    {phone3 && <p className="flex items-center mb-2"><FaPhone className="mr-2 text-lg" />{phone3}</p>}
    {email1 && <p className="flex items-center mb-2"><FaEnvelope className="mr-2 text-lg" />{email1}</p>}
    {email2 && <p className="flex items-center mb-2"><FaEnvelope className="mr-2 text-lg" />{email2}</p>}
    {email3 && <p className="flex items-center mb-2"><FaEnvelope className="mr-2 text-lg" />{email3}</p>}
    {facebook && <p className="flex items-center mb-2 break-all"><FaFacebook className="mr-2 text-lg" /> <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">{facebook}</a></p>}
  </div>
);

export default function Contacto() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('/public/bg-blue.avif')" }}>
        <div className="max-w-7xl mx-auto bg-opacity-50 p-6 rounded-lg">
          <Section variants={fadeIn}>
            <h1 className="text-4xl font-bold text-center mb-8 mt-16 text-white font-sans">Contacto</h1>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Section variants={slideIn}>
              <ContactInfo
                title="DISTRIBUIDORA MAYORISTA - RESISTENCIA, CHACO"
                address="Av. 25 de Mayo 1063 - Resistencia, Chaco."
                phone1="0362 - 4411400 (Fijo)"
                phone2="0336 - 4692275"
                phone3="0362 - 4539131"
                email1="elmundodelrespuestores@hotmail.com"
                email2="compras@distribuidoramundo.com.ar"
                email3="ventas@distribuidoramundo.com.ar"
                facebook="https://www.facebook.com/Distribuidora-el-Mundo1807463909503685/"
              />
            </Section>
            <Section variants={slideIn}>
              <ContactInfo
                title="MINORISTA - RESISTENCIA, CHACO"
                address="Av. 25 de Mayo 1063 - Resistencia, Chaco."
                phone1="0370 - 4505287 "
                phone2="0362 - 4421892 (Fijo)"
                email1="elmundodelrespuestores@hotmail.com"
                facebook="https://www.facebook.com/ElMundoDelRepuestoRS/"
              />
            </Section>
            <Section variants={slideIn}>
              <ContactInfo
                title="MINORISTA - FORMOSA CAPITAL"
                address="Av. 25 de Mayo 1365 - Formosa Capital."
                phone1="370 - 4425193"
                phone2="370 - 4435824"
                email1="todofordfsa@hotmail.com"
                facebook="https://www.facebook.com/elmundorepuesto/"
              />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
