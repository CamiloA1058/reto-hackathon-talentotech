"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  params: {
    infoId: string;
  };
};

const InfoProductPage = ({ params }: Props) => {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://cuddly-space-umbrella-wr75557p9w6qh5xvw-3000.app.github.dev/api/products/${params.infoId}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const productData = await res.json();
        setProduct(productData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchProduct();
  }, [params.infoId]);

  const recommendedProducts = [
    { id: 1, name: "Recommended Product 1", price: "$29.99" },
    { id: 2, name: "Recommended Product 2", price: "$39.99" },
    { id: 3, name: "Recommended Product 3", price: "$49.99" },
  ];

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center p-4 gap-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 w-full">
        <div className="relative w-[150px] h-[150px] lg:w-[240px] lg:h-[240px] mb-8 lg:mb-0">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-y-4 w-full lg:w-auto">
          <p>{params.infoId}</p>
          <hr className="w-full" />
          <h1 className="text-xl lg:text-2xl font-bold">{product.nombre}</h1>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
        </div>
      </div>

      <h2 className="text-lg lg:text-xl font-semibold mt-8 lg:mt-12">
        Recommended Products
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
        {recommendedProducts.map((recProduct) => (
          <div
            key={recProduct.id}
            className="border p-4 rounded shadow-sm flex-1"
          >
            <h3 className="text-lg font-semibold">{recProduct.name}</h3>
            <p className="text-gray-600">{recProduct.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoProductPage;
