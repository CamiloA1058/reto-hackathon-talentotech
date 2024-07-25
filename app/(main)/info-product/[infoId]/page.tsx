import React from "react";

type Props = {
  params: {
    infoId: string;
  };
};

const ProductPage = ({ params }: Props) => {
  const product = {
    name: "Producto Ejemplo",
    description: "Descripción del producto ejemplo.",
    price: "$99.99",
    imageUrl: "https://via.placeholder.com/150", // URL de la imagen del producto
  };

  const recommendedProducts = [
    { id: 1, name: "Producto Recomendado 1", price: "$29.99" },
    { id: 2, name: "Producto Recomendado 2", price: "$39.99" },
    { id: 3, name: "Producto Recomendado 3", price: "$49.99" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "150px", height: "150px" }}
        />
        <div>
          <p>{params.infoId}</p>
          <hr />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>

      <h2>Productos Recomendados</h2>
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
