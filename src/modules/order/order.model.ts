import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const ProductSchema = new Schema<TOrder>({
  email: { type: String, required: [true, "email is required"] },
  price: { type: Number, required: [true, "price is required"] },
  productId: { type: String, required: [true, "Product id required"] },
  quantity: { type: Number, required: [true, "quantity is required"] },
});

export const OrderModel = model<TOrder>("order", ProductSchema);
