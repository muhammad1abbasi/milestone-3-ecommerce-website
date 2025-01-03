import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Jacket",
    price: 100,
    description:
      "A versatile, stylish black jacket made from premium materials. Perfect for casual and semi-formal occasions, offering both comfort and durability.",
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "High Neck Jersey",
    price: 300,
    description:
      "A cozy and stylish highneck jersey designed for warmth and elegance. Ideal for winter outings, it combines comfort with a sleek design.",
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Premium Jacket Black",
    price: 500,
    description:
      "A sophisticated black jacket perfect for all occasions. Designed with premium materials, it offers style, comfort, and durability. Ideal for cool weather and versatile.",
    image: "/product3.jpg",
  },
];

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  // Find the product
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="text-center text-red-600 font-bold mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-2 text-lg">${product.price}</p>
          <p className="mt-4 text-gray-700 text-md">{product.description}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="/cart"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Add to Cart
            </Link>
            <Link
              href="/"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
