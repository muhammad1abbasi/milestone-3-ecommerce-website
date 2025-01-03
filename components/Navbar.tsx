import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-400 text-white p-4">
      <div className="container mx-auto flex justify-evenly items-center">
        <Image src={"/alisahab.png"} alt='null' width={200} height={200}/>
        <div className="flex space-x-4">
        <Link href="/">
      
      <Image src={"/home.png"} alt='null' width={30} height={30}/>
    
  </Link>
          <Link href="/cart">
      
        <Image src={"/grocery-store.png"} alt='null' width={30} height={30}/>
      
    </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
