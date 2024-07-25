// // pages/api/recommendations/[productId].js
// import { NextApiRequest, NextApiResponse } from "next";

// import ContentBasedRecommender from "content-based-recommender";
// import fs from "fs";
// import path from "path";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { productId } = req.query;

//   // Leer los datos de productos desde el archivo JSON
//   const filePath = path.resolve("./public", "productos.json");
//   const jsonData = fs.readFileSync(filePath, "utf8");
//   const productos = JSON.parse(jsonData);

//   // Configurar el recomendador
//   const recommender = new ContentBasedRecommender({
//     minScore: 0.1, // Ajusta el umbral mínimo de similitud
//     maxSimilarDocuments: 5, // Número máximo de documentos similares
//   });

//   // Preparar datos para el recomendador
//   const documents = productos.map((producto) => ({
//     id: producto.id.toString(),
//     content: producto.descripcion,
//   }));

//   // Entrenar el recomendador
//   recommender.train(documents);

//   // Obtener las recomendaciones
//   const similarDocuments = recommender.getSimilarDocuments(
//     productId.toString(),
//     0,
//     3
//   ); // Obtener 3 recomendaciones

//   // Obtener los productos recomendados
//   const recomendaciones = similarDocuments.map((similarDocument) => {
//     return productos.find(
//       (producto) => producto.id.toString() === similarDocument.id
//     );
//   });

//   res.status(200).json(recomendaciones);
// }
