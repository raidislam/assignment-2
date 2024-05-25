"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidation = zod_1.z.object({
    email: zod_1.z.string().email("required email address"),
    price: zod_1.z.number(),
    productId: zod_1.z.string().nonempty("Product ID is required"),
    quantity: zod_1.z.number(),
});
exports.default = orderValidation;
