import express from "express";
import { OrderController } from "./order.controller";

const routes = express.Router();

routes.post("/", OrderController.orderCreate_C);
routes.get("/", OrderController.getAllOrder_C);

export const OrderRoute = routes;
