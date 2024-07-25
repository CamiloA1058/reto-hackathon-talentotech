"use client";

import React, { useEffect, useState } from "react";
import { RecommendedctCard } from "./recommended";
import "./sidebar.css";

type Props = {};

const relaciones = {
  "Pack Piña Chips": [
    {
      nombre: "Pan Integral",
      url: "https://www.tiendasjumbo.co/pan-bimbo-artesano-integral-tajado-x500g/p",
    },
    {
      nombre: "Pan Tajado Antano",
      url: "https://www.tiendasjumbo.co/pan-santa-clara-antano-tajado-x470g/p",
    },
  ],
  "Pack Remolacha": [{
    {
      nombre: "Yogurt Alpina Original",
      url: "https://www.tiendasjumbo.co/yogurt-x-150-gr-x-5-und-alpina/p",
    },
    {
      nombre: "Yogurt Griego",
      url: "https://www.tiendasjumbo.co/yogurt-alpina-griego-fresa-mora-x4und-x150-c-u/p",
    },
  }],
  "Pack Manzana": [{
    {
      nombre: "Avena Colanta",
      url: "https://www.tiendasjumbo.co/paquete-avena-natural-250g-x-4und/p",
    },
    {
      nombre: "Pan Tajado Antano",
      url: "https://www.tiendasjumbo.co/avena-vaso-alpina-finesse-x-6-und-x-250-ml-c-u/p",
    },
  }],
  "Pack Coliflor": [{
    {
      nombre: "Yogurt Alpina Original",
      url: "https://www.tiendasjumbo.co/yogurt-x-150-gr-x-5-und-alpina/p",
    },
    {
      nombre: "Yogurt Griego",
      url: "https://www.tiendasjumbo.co/yogurt-alpina-griego-fresa-mora-x4und-x150-c-u/p",
    },
  }]
};

const dataPlatformA = {
  user_id: [1, 2, 3, 4, 5, 6],
  product: [
    "Pack Piña Chips",
    "Pack Remolacha",
    "Pack Piña Chips",
    "Pack Manzana",
    "Pack Coliflor",
    "Pack Naranja",
  ],
  purchase_count: [3, 2, 1, 5, 2, 4],
};

const dataPlatformB = {
  user_id: [1, 2, 3, 4, 5, 6],
  product: [
    "Pan Integral",
    "Yogurt",
    "Pan Integral",
    "Yogurt",
    "Yogurt",
    "Yogurt",
  ],
  purchase_count: [4, 2, 3, 1, 5, 5],
};

export const Sidebar = ({}: Props) => {
  const [productos, setProductos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch(
          "https://cuddly-space-umbrella-wr75557p9w6qh5xvw-5000.app.github.dev/recomendaciones"
        ); // Asegúrate de usar la URL correcta aquí

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchProductos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex h-full lg:w-[260px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-3">
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Seguro te encantarán
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 flex-1 overflow-y-auto px-2 pb-4">
        {productos.map((producto, index) => (
          <RecommendedctCard key={index} {...producto} />
        ))}
      </div>
    </div>
  );
};
