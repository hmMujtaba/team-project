import React from "react";
import { useSelector } from "react-redux";

const Ecommerce = () => {
  const products = useSelector((store) => store.products.products); // ✅ Fixed path

  console.log(products);

  return (
    <div className="w-screen h-screen p-10 mx-auto">
      <h1 className="text-5xl text-indigo-500 text-center font-bold">
        Ecommerce Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-2 max-w-md w-full flex flex-col bg-white shadow-lg"
          >
            <img
              className="w-full h-42 object-cover"
              src={product.image} 
              alt={product.name} 
            />
            <div className="flex items-center justify-between flex-col p-6 ">
          <div className="flex flex-items-center justify-between p-2 w-full">
            <h2 className="text-lg font-medium">{product.name}</h2> {/* ✅ Fixed 'grey' to 'gray' */}
            <p className="text-gray-500 text-sm">{product.price}</p> {/* ✅ Fixed 'grey' to 'gray' */}
            </div>
            <button className=" px-6 py-2 bg-indigo-600 rounded-[25px] text-white hover:bg-indigo-700 transition duration-300 cursor-pointer"> Add to cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
