import express from "express";
import { ProductController } from "./product.controller";

const routes = express.Router();

routes.post("/", ProductController.createProduct_C);
routes.get("/", ProductController.getAllProduct_C);
routes.get("/:productId", ProductController.getSingleProduct_C);
routes.put("/:productId", ProductController.updateProduct_C);
routes.delete("/:productId", ProductController.deleteSingleProduct_C);

export const ProductRoute = routes;
