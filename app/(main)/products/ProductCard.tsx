import React from "react";
import Image from "next/image";

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string; // Podría ser la URL de la imagen
  precio: number;
  disponible: boolean;
}

interface ProductCardProps {
  producto: Producto;
}

export const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  return (
    <div className="border-2 rounded-xl p-4 m-2 shadow-md">
      {/* <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={200}
        height={200}
        className="rounded-lg"
      /> */}
      <h2 className="text-xl font-bold mt-2">{producto.nombre}</h2>
      <p className="text-gray-700 mt-1">{producto.descripcion}</p>
      <p className="text-lg font-semibold mt-2">${producto.precio}</p>
      <p
        className={`mt-2 ${
          producto.disponible ? "text-green-500" : "text-red-500"
        }`}
      >
        {producto.disponible ? "Disponible" : "Agotado"}
      </p>
    </div>
  );
};
