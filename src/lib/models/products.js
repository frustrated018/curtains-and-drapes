import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  status: {
    type: String,
    default: "available",
  },
  inStock: {
    type: Number,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictures: [
    {
      img: {
        type: String,
        required: true,
      },
    },
  ],
  features: [
    {
      feature: {
        type: String,
        required: true,
      },
    },
  ],
});

const Product = models.Product || model("Product", productSchema);

export default Product