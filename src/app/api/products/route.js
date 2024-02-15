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

// Adding/Posting a Product

export const POST = async (request) => {
  try {
    const body = await request.json();

    // console.log(body.productId);

    //! Check If Product Already exists in db
    const exisingProduct = await Product.exists({
      productId: body?.productId,
    });

    if (exisingProduct) {
      return new NextResponse("Product Aleady exists", { status: 400 });
    }

    //* If Doesn't exist add new product
    const newProduct = new Product(body);
    await newProduct.save();

    // console.log(newProduct);

    return new NextResponse("successfully added product", { status: 200 });
  } catch (error) {
    console.log("Error in Adding Product:" + error);
    return new NextResponse("Error in adding Product: " + error, {
      status: 500,
    });
  }
};
