"use client";

import React, { useEffect, useState } from "react";

type Props = {
  params: {
    infoId: string;
  };
};

const ProductPage = ({ params }: Props) => {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          // `http://localhost:3000/api/products/${params.infoId}`
          `https://cuddly-space-umbrella-wr75557p9w6qh5xvw-3000.app.github.dev/api/products/${params.infoId}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const productData = await res.json();
        setProduct(productData);
      } catch (err) {
        setError(err.message);
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
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src={product.imagen}
          alt={product.nombre}
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <p>{params.infoId}</p>
          <hr />
          <h1>{product.nombre}</h1>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
        </div>
      </div>

      <h2>Recommended Products</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {recommendedProducts.map((recProduct) => (
          <div
            key={recProduct.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{recProduct.name}</h3>
            <p>{recProduct.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
// import React from "react";
// import { GetServerSideProps } from "next";

// type Props = {
//   params: {
//     infoId: string;
//   };
//   product: {
//     name: string;
//     description: string;
//     price: string;
//     imageUrl: string;
//   };
//   recommendedProducts: {
//     id: number;
//     name: string;
//     price: string;
//   }[];
// };

// const ProductPage = ({ params, product, recommendedProducts }: Props) => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           style={{ width: "150px", height: "150px" }}
//         />
//         <div>
//           <p>{params.infoId}</p>
//           <hr />
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//         </div>
//       </div>

//       <h2>Recommended Products</h2>
//       <div style={{ display: "flex", gap: "10px" }}>
//         {recommendedProducts.map((recProduct) => (
//           <div
//             key={recProduct.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             <h3>{recProduct.name}</h3>
//             <p>{recProduct.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { infoId } = context.params as { infoId: string };

//   // Fetch product data from your API
//   const res = await fetch(`http://localhost:3000/api/products/${infoId}`);
//   const product = await res.json();

//   // Example recommended products
//   const recommendedProducts = [
//     { id: 1, name: "Recommended Product 1", price: "$29.99" },
//     { id: 2, name: "Recommended Product 2", price: "$39.99" },
//     { id: 3, name: "Recommended Product 3", price: "$49.99" },
//   ];

//   return {
//     props: {
//       params: { infoId },
//       product,
//       recommendedProducts,
//     },
//   };
// };

// export default ProductPage;
