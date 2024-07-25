import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
}

type Options = {
  params: {
    productId: string;
  };
};

export async function GET(req: Request, options: Options) {
  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const filePath = path.join(jsonDirectory, "products.json");

    const fileContents = await fs.readFile(filePath, "utf8");
    const products: Product[] = JSON.parse(fileContents);

    const productId = parseInt(options.params.productId, 10);

    const filteredProduct = products.find(
      (product) => product.id === productId
    );

    if (!filteredProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(filteredProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
