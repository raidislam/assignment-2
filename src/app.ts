import cors from "cors";
import express, { Application, Request, Response } from "express";
import { OrderRoute } from "./modules/order/order.route";
import { ProductRoute } from "./modules/product/product.route";
const app: Application = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Product Management");
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
