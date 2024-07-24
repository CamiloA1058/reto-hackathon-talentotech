import type { Producto } from "./ProductCard";
import { ProductCard } from "./ProductCard";

// Arreglo de productos
const productosMock: Producto[] = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth Avanzados",
    descripcion:
      "Experimenta la libertad del audio inalámbrico con nuestros auriculares Bluetooth de última generación. Diseñados para ofrecer calidad de sonido superior y comodidad durante horas de uso. Con micrófono integrado para llamadas manos libres.",
    imagen: "url_de_la_imagen_1.jpg",
    precio: 89.99,
    disponible: true,
  },
  {
    id: 2,
    nombre: "Smartwatch Fitness Pro",
    descripcion:
      "Potencia tus entrenamientos con nuestro Smartwatch Fitness Pro. Monitoriza tu ritmo cardíaco, contador de pasos, y gestiona tus notificaciones directamente desde tu muñeca. Resistente al agua y con una batería de larga duración.",
    imagen: "url_de_la_imagen_2.jpg",
    precio: 129.99,
    disponible: false, // Agotado temporalmente
  },
  {
    id: 3,
    nombre: "Cámara DSLR Profesional",
    descripcion:
      "Captura momentos inolvidables con nuestra Cámara DSLR Profesional. Sensor de alta resolución, capacidad para grabación de video en 4K, y opciones avanzadas de control manual. Ideal para fotógrafos y videógrafos aficionados y profesionales.",
    imagen: "url_de_la_imagen_3.jpg",
    precio: 1499.99,
    disponible: true, // Disponible para preorden
  },
  {
    id: 4,
    nombre: "Laptop Gamer Ultra",
    descripcion:
      "Maximiza tu experiencia de juego con nuestra Laptop Gamer Ultra. Equipada con procesador de última generación, tarjeta gráfica de alto rendimiento, y pantalla Full HD con alta tasa de refresco para juegos fluidos y detallados.",
    imagen: "url_de_la_imagen_4.jpg",
    precio: 1999.99,
    disponible: true,
  },
  {
    id: 5,
    nombre: "Robot Aspirador Inteligente",
    descripcion:
      "Simplifica la limpieza de tu hogar con nuestro Robot Aspirador Inteligente. Programable desde tu smartphone, sensores avanzados para evitar obstáculos y bordes. Ideal para mantener tus pisos impecables sin esfuerzo.",
    imagen: "url_de_la_imagen_5.jpg",
    precio: 299.99,
    disponible: true,
  },
];

const fetchAmazonData = async () => {
  const response = await fetch(
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        "x-rapidapi-key": "TU_RAPIDAPI_KEY",
      },
    }
  );
  const data = await response.json();
  return data;
};

const ProductsPage = () => {
  return (
    <div>
      {productosMock.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductsPage;
