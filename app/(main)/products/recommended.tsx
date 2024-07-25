export interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio?: number;
}

export const RecommendedctCard = ({
  nombre,
  descripcion,
  imagen,
  precio,
}: Producto) => {
  return (
    <div className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-2 lg:p-3 cursor-pointer active:border-b-2 flex flex-col justify-between">
      <div className="relative aspect-square mb-2 max-h-[100px] w-full">
        {/* <Image
          src={producto.imagen}
          alt={producto.nombre}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-between text-center">
        <p className="text-lg font-bold mt-1">{nombre}</p>
        <p className="text-md font-semibold mt-1">${precio}</p>
      </div>
    </div>
  );
};
