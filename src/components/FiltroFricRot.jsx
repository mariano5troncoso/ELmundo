import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import SearchBar from './SearchBar';
import Modal from 'react-modal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const FiltroFricRot = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    fetch('/FRIC-ROT.xlsx')
      .then(response => response.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        setProducts(jsonData);
      })
      .catch(error => {
        console.error('Error fetching the Excel file:', error);
      });
  }, []);

  const handleCategoryChange = event => {
    const { value, checked } = event.target;
    setSelectedCategories(prevSelected =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter(category => category !== value)
    );
  };

  const openModal = image => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage('');
  };

  const filteredProducts = products
    .filter(product => selectedCategories.length === 0 || selectedCategories.includes(product.COMPONENTE))
    .filter(product =>
      (typeof product.MARCA === 'string' && product.MARCA.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof product.MODELO === 'string' && product.MODELO.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof product.CODIGO === 'string' && product.CODIGO.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const allCategories = [...new Set(products.map(product => product.COMPONENTE))];

  return (
    <div className="flex flex-row">
      <div className="w-1/4 p-4 bg-sky-800 text-slate-100">
        <h2 className="text-lg font-semibold mb-2">Categorías</h2>
        <ul>
          {allCategories.map((category, index) => (
            <li key={index} className="mb-1">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                  className="mr-2"
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2 overflow-x-auto w-screen">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.IMAGEN}
                  alt={`Imagen de ${product.MARCA} ${product.MODELO}`}
                  className="h-48 w-full object-contain cursor-pointer"
                  onClick={() => openModal(product.IMAGEN)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.CODIGO}</h3>
                  <p className="text-sm text-gray-700">{product.MARCA}</p>
                  <p className="text-sm text-gray-700">{product.MODELO}</p>
                  <p className="text-sm text-gray-700">{product.MOTOR}</p>
                  <p className="text-sm text-gray-700">{product.COMENTARIOS}</p>
                  <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Añadir al carrito</button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full">Producto no encontrado</div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen ampliada"
        className="fixed inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 rounded flex flex-col items-center" style={{ width: '500px', height: '500px' }}>
          <button onClick={closeModal} className="mb-4 bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
          <Zoom>
            <img src={modalImage} alt="Imagen ampliada" className="max-w-full max-h-full object-contain" />
          </Zoom>
        </div>
      </Modal>
    </div>
  );
};

export default FiltroFricRot;
