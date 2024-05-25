"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const routes = express_1.default.Router();
routes.post("/", product_controller_1.ProductController.createProduct_C);
routes.get("/", product_controller_1.ProductController.getAllProduct_C);
routes.get("/:productId", product_controller_1.ProductController.getSingleProduct_C);
routes.put("/:productId", product_controller_1.ProductController.updateProduct_C);
routes.delete("/:productId", product_controller_1.ProductController.deleteSingleProduct_C);
exports.ProductRoute = routes;
