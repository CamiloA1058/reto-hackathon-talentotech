import React from "react";
import Image from "next/image";

export interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio?: number;
}

export const ProductCard = ({
  nombre,
  descripcion,
  imagen,
  precio,
}: Producto) => {
  return (
    <div className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2 flex flex-col justify-between">
      <div className="relative aspect-square mb-4 max-h-[150px] w-full">
        {/* <Image
          src={producto.imagen}
          alt={producto.nombre}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-between text-center">
        <p className="text-xl font-bold mt-2">{nombre}</p>
        <p className="text-lg font-semibold mt-2">${precio}</p>
      </div>
    </div>
  );
};
