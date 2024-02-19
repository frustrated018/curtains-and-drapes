"use server";

import { revalidateTag } from "next/cache";

//! Getting all products data

export const getProductsData = async () => {
  const res = await fetch(
    "https://curtains-and-drapes.vercel.app/api/products",
    { next: { tags: ["all-products-revalidate"], revalidate: 3600 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product Data");
  }

  return res.json();
};

//! Deleting Product by ID:

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(
      `https://curtains-and-drapes.vercel.app/api/products?id=${id}`,
      {
        method: "DELETE",
      },
    );

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

//! Refresh products table

export const refreshTable = () => {
  revalidateTag("all-products-revalidate");
};

//! Add Product

export const addProduct = (formData) => {
  console.log(formData);
  console.log("ahhhhh");
};
