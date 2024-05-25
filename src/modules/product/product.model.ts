import { model, Schema } from "mongoose";
import { TInventory, TProduct, Tvariants } from "./product.interface";

const variantsSchema = new Schema<Tvariants>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<TInventory>({
  inStock: { type: Boolean, required: [true, "Product Stock is required"] },
  quantity: { type: Number },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Name is required"] },
  description: { type: String },
  price: { type: Number, required: [true, "Price is required"] },
  category: { type: String, required: [true, "category is required"] },
  tags: { type: [String] },
  variants: { type: [variantsSchema] },
  inventory: { type: inventorySchema },
});

export const ProductModel = model<TProduct>("products", productSchema);
