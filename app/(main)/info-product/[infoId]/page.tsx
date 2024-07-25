import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    infoId: string;
  };
};

const InfoProductPage = ({ params }: Props) => {
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
      link: "https://listado.mercadolibre.com.co/auriculares-bluetooth",
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
      link: "https://listado.mercadolibre.com.co/smartwatch-fitness-pro#D[A:Smartwatch%20Fitness%20Pro]",
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
      link: "https://listado.mercadolibre.com.co/c%C3%A1mara-dslr-profesional#D[A:C%C3%A1mara%20DSLR%20Profesional]",
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
      link: "https://listado.mercadolibre.com.co/laptop-gamer-ultra#D[A:Laptop%20Gamer%20Ultra]",
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
      link: "https://listado.mercadolibre.com.co/robot-aspirador-inteligente#D[A:Robot%20Aspirador%20Inteligente]",
    },
  ];

  const Auriculares = products[1];

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center p-4 gap-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 w-full">
        <div className="relative w-full lg:w-[240px] h-[240px] mb-8 lg:mb-0">
          <Image
            src={Auriculares.imagen}
            alt={Auriculares.nombre}
            layout="responsive"
            width={240}
            height={240}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-y-4 w-full lg:w-auto">
          <h1 className="text-xl lg:text-2xl font-bold">
            {Auriculares.nombre}
          </h1>
          <p>{Auriculares.descripcion}</p>
          <p>{Auriculares.precio}</p>
        </div>
      </div>

      <h2 className="text-lg lg:text-xl font-semibold mt-8 lg:mt-12">
        Productos relacionados
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
        {products.map((recProduct) => (
          <Link
            href={recProduct.link}
            key={recProduct.id}
            className="border p-4 rounded shadow-sm flex-1"
          >
            <h3 className="text-lg font-semibold">{recProduct.nombre}</h3>
            <p className="text-gray-600">{recProduct.precio}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfoProductPage;
