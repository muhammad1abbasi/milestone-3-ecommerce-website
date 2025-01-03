import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Hero from '@/components/Hero';
export default function Home() {
  const products = [
    { id: 1, name: 'Jacket', price: 100, image: '/product1.jpg' , },
    { id: 2, name: 'Product 2', price: 200, image: '/product2.jpg', },
    { id: 3, name: 'Product 2', price: 500, image: '/product3.jpg', },
  ];

  return (
    <div className=''>
      <Navbar />
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ml-32 mt-10 justify-center items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
