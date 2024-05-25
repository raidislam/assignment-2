"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, "email is required"] },
    price: { type: Number, required: [true, "price is required"] },
    productId: { type: String, required: [true, "Product id required"] },
    quantity: { type: Number, required: [true, "quantity is required"] },
});
exports.OrderModel = (0, mongoose_1.model)("order", ProductSchema);
