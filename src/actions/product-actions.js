"use server";

import { revalidateTag } from "next/cache";
import { toast } from "sonner";

//! Deleting products
export const handleDelete = async (id) => {
  console.log("id form handleDelete: ", id);
  try {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`);

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to delete product: ${errorMessage}`);
    }

    toast.success("Product has been deleted", { duration: 3000 });
    revalidateTag("blah");
  } catch (error) {
    console.error("Error deleting product:", error);
    toast.error("Couldn't delete product", {
      duration: 5000,
      description: "An error occurred while trying to delete the product.",
    });
  }
};
