import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md p-4 hover:shadow-lg transition w-60 h-60">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <a
        href={`/products/${product.id}`}
        className="block bg-blue-600 text-white text-center mt-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        View Details
      </a>
    </div>
  );
};

export default ProductCard;
