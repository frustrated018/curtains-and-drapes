import connect from "@/lib/db";
import Product from "@/lib/models/products";
import { isValidObjectId } from "mongoose";
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
    await connect();
    const body = await request.json();

    // console.log(body.productId);

    //! Check If Product Already exists in db
    const filter = {
      $or: [{ productId: body?.productId }, { name: body?.name }],
    };
    const exisingProduct = await Product.exists(filter);

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

// Deleting A product

export const DELETE = async (request) => {
  try {
    await connect();
    const params = request?.nextUrl?.searchParams;
    const id = params.get("id");
    if (!id || !isValidObjectId(id)) {
      return new NextResponse("Invalid id provided", { status: 400 });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return new NextResponse("Product not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify({ message: "Product Deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in deleting product: ", error);
    return new NextResponse("Error in deleting product", { status: 500 });
  }
};
