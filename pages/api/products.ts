import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    name: "Jacket",
    price: 100,
    description: "This is the description for Product 1.",
    image: "/product1.jpg",
  
    
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is the description for Product 2.",
    image: "/product2.jpg",
    
  },
  {
    id: 3,
    name: "Product 3",
    price: 150,
    description: "This is the description for Product 3.",
    image: "/product3.jpg",
    
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
