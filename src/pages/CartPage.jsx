import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
    const total = cartItems.reduce((acc, item) => acc + (item.precio || 0) * item.quantity, 0);

    return (
        <div className="w-full bg-white p-4 shadow-lg mt-24">
            <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="mb-2 flex justify-between items-center">
                            <div>
                                <img src={item.IMAGEN} alt={item.MARCA} className="h-16 w-16 object-contain" />
                                <span>{item.CODIGO} - {item.MARCA} {item.MODELO}</span>
                                <div>
                                    <button
                                        onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => updateCartItemQuantity(index, item.quantity + 10)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
                                    >
                                        +10
                                    </button>
                                    <button
                                        onClick={() => updateCartItemQuantity(index, item.quantity - 10)}
                                        className="bg-orange-500 text-white px-2 py-1 rounded ml-2"
                                    >
                                        -10
                                    </button>
                                </div>
                            </div>
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

export default CartPage;
