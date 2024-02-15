import connect from "@/lib/db";
import Product from "@/lib/models/products";
import { NextResponse } from "next/server";

// Getting all the products
export const GET = async () => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching Products" + error, {
      status: 500,
    });
  }
};
