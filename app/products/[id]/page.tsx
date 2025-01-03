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
    { id: 1, name: 'Jacket', price: 100, description: 'Details for Product 1', image: '/product1.jpg', },
    { id: 2, name: 'Product 2', price: 200, description: 'Details for Product 2', image: '/product2.jpg', },
    { id: 3, name: 'Product 2', price: 500, description: 'Details for Product 2', image: '/product3.jpg', },
  ];
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mx-auto object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <a
        href="/"
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ProductDetails;
