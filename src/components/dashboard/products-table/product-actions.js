"use server";

import { revalidateTag } from "next/cache";

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`${errorMessage}`);
    }
    // Revaladating the products
    revalidateTag("all-products-revalidate");
  } catch (error) {
    throw error;
  }
};
