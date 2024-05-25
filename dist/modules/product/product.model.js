"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const inventorySchema = new mongoose_1.Schema({
    inStock: { type: Boolean, required: [true, "Product Stock is required"] },
    quantity: { type: Number },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String },
    price: { type: Number, required: [true, "Price is required"] },
    category: { type: String, required: [true, "category is required"] },
    tags: { type: [String] },
    variants: { type: [variantsSchema] },
    inventory: { type: inventorySchema },
});
exports.ProductModel = (0, mongoose_1.model)("products", productSchema);
