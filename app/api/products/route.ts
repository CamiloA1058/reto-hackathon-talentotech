import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, "products.json"),
    "utf8"
  );
  const productos = JSON.parse(fileContents);
  return NextResponse.json(productos);
}
