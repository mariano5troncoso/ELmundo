import React from 'react';

const Carrito = ({ cartItems, removeFromCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className="fixed bottom-0 right-0 w-1/4 bg-white p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="mb-2 flex justify-between items-center">
                            <span>{item.CODIGO} - {item.MARCA} {item.MODELO}</span>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Quitar
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">El carrito está vacío.</p>
            )}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Proceder al Pago</button>
            </div>
        </div>
    );
};

export default Carrito;
