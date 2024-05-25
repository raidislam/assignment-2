"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const order_route_1 = require("./modules/order/order.route");
const product_route_1 = require("./modules/product/product.route");
const app = (0, express_1.default)();
// MIDDLEWARE
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use("/api/products", product_route_1.ProductRoute);
app.use("/api/orders", order_route_1.OrderRoute);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// app.get("/", (req: Request, res: Response) => {
//   res.send("Product Management");
// });
exports.default = app;
