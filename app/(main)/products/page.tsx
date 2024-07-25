"use client";

import { ProductCard } from "./product-card";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const router = useRouter();

  const products = [
    {
      id: 1,
      nombre: "Auriculares Bluetooth Avanzados",
      descripcion:
        "Experimenta la libertad del audio inalámbrico con nuestros auriculares Bluetooth de última generación. Diseñados para ofrecer calidad de sonido superior y comodidad durante horas de uso. Con micrófono integrado para llamadas manos libres.",
      imagen:
        "https://tse2.mm.bing.net/th?id=OIP.swDbRZUeySTo6-L3CE5sWAHaHa&pid=Api&P=0&h=180",
      precio: 89.99,
      disponible: true,
    },
    {
      id: 2,
      nombre: "Smartwatch Fitness Pro",
      descripcion:
        "Potencia tus entrenamientos con nuestro Smartwatch Fitness Pro. Monitoriza tu ritmo cardíaco, contador de pasos, y gestiona tus notificaciones directamente desde tu muñeca. Resistente al agua y con una batería de larga duración.",
      imagen:
        "https://www.kindpng.com/picc/m/309-3094228_smartwatch-png-transparent-png.png",
      precio: 129.99,
      disponible: false,
    },
    {
      id: 3,
      nombre: "Cámara DSLR Profesional",
      descripcion:
        "Captura momentos inolvidables con nuestra Cámara DSLR Profesional. Sensor de alta resolución, capacidad para grabación de video en 4K, y opciones avanzadas de control manual. Ideal para fotógrafos y videógrafos aficionados y profesionales.",
      imagen:
        "https://tse2.mm.bing.net/th?id=OIP.x0-NrLREADboqpNwJp0l1gHaFj&pid=Api&P=0&h=180",
      precio: 1499.99,
      disponible: true,
    },
    {
      id: 4,
      nombre: "Laptop Gamer Ultra",
      descripcion:
        "Maximiza tu experiencia de juego con nuestra Laptop Gamer Ultra. Equipada con procesador de última generación, tarjeta gráfica de alto rendimiento, y pantalla Full HD con alta tasa de refresco para juegos fluidos y detallados.",
      imagen:
        "https://tse3.mm.bing.net/th?id=OIP.s_Te29dq-WW354cfKRpF-QHaHK&pid=Api&P=0&w=300&h=300",
      precio: 1999.99,
      disponible: true,
    },
    {
      id: 5,
      nombre: "Robot Aspirador Inteligente",
      descripcion:
        "Simplifica la limpieza de tu hogar con nuestro Robot Aspirador Inteligente. Programable desde tu smartphone, sensores avanzados para evitar obstáculos y bordes. Ideal para mantener tus pisos impecables sin esfuerzo.",
      imagen:
        "https://tse3.mm.bing.net/th?id=OIP.pphkWjz8itzfo3CDQcr6SAHaFw&pid=Api&P=0&w=300&h=300",
      precio: 299.99,
      disponible: true,
    },
  ];

  const handleSecondProductClick = () => {
    router.push("/info-product/1");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Productos</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg">
          {products.map((producto, index) => (
            <div
              key={index}
              onClick={index === 1 ? handleSecondProductClick : undefined}
            >
              <ProductCard {...producto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
