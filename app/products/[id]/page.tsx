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

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  
  const products: Product[] = [
    { id: 1, name: 'Jacket', price: 100, description: 'A versatile, stylish black jacket made from premium materials. Perfect for casual and semi-formal occasions, offering both comfort and durability.', image: '/product1.jpg', },
    { id: 2, name: 'High Neck Jersey', price: 300, description: 'A cozy and stylish highneck jersey designed for warmth and elegance. Ideal for winter outings, it combines comfort with a sleek design.', image: '/product2.jpg', },
    { id: 3, name: 'Premium Jakcet Black', price: 500, description: 'A sophisticated black jacket perfect for all occasions. Designed with premium materials, it offers style, comfort, and durability. Ideal for cool weather and versatile', image: '/product3.jpg', },
  ];
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={200} height={200}
        className="w-full max-w-md mx-auto object-cover rounded-md"
      />
      <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4  text-xl text-center text-slate-500 font-bold">{product.description}</p>
      <Link
        href="/cart"
        className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add To Card 
      </Link>
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Back to Home
      </Link>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
