import React, { useContext } from 'react';
import { CartContext } from '../redux/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
    const total = cartItems.reduce((acc, item) => acc + (item.precio || 0) * item.quantity, 0);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Shopping Cart</h2>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {cartItems.length > 0 ? (
                    <div className="bg-white shadow rounded-lg">
                        <ul role="list" className="divide-y divide-gray-200">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex py-6 px-4 sm:px-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={item.IMAGEN}
                                            alt={item.MARCA}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.CODIGO} - {item.MARCA} {item.MODELO}</h3>
                                                <p className="ml-4">${(item.precio * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500"> {item.COMPONENTE}</p>
                                            <div className="flex space-x-2">
                                            <button
                                                    type="button"
                                                    onClick={() => updateCartItemQuantity(index, item.quantity - 10)}
                                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                                >
                                                    -10
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                                                    className="bg-blue-900 text-white px-2 py-1 rounded"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => updateCartItemQuantity(index, item.quantity + 10)}
                                                    className="bg-blue-900 text-white px-2 py-1 rounded"
                                                >
                                                    +10
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(index)}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500"></p>
                            <div className="mt-6">
                                <button
                                    className="flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600"
                                >
                                    Realizar Compra
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    {' '}
                                    <button
                                        type="button"
                                        onClick={() => navigate(-1)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continuar Comprando
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">The cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default CartPage;
