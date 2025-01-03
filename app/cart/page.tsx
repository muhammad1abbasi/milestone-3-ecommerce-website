"use client";

import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
  ]);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default CartPage;