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

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const productId = params.id;

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

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div className="text-center text-red-600 font-bold">Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full max-w-sm mx-auto object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center items-center mt-6">
          <h1 className="text-3xl font-extrabold text-gray-800">{product.name}</h1>
          <p className="text-gray-700 mt-2 text-xl">${product.price}</p>
          <p className="mt-4 text-lg text-gray-600 text-center">{product.description}</p>
          <div className="mt-6 flex space-x-4">
            <Link
              href="/cart"
              className="inline-block bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Add To Cart
            </Link>
            <Link
              href="/"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
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
