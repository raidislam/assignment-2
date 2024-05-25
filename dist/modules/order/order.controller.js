"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const orderCreate_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { order: orderData } = req.body;
            const orderValidData = order_validation_1.default.parse(orderData);
            const result = yield order_service_1.OrderService.createOrderIntoDB(orderValidData);
            res.status(200).json({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "something went wrong",
                error: error,
            });
        }
    });
};
const getAllOrder_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.query.email;
            let query = {};
            if (email) {
                query = email;
            }
            const result = yield order_service_1.OrderService.getAllOrderData(query);
            res.status(200).json({
                success: true,
                message: `Orders fetched successfully!`,
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Order not found",
                error: error,
            });
        }
    });
};
exports.OrderController = {
    orderCreate_C,
    getAllOrder_C,
};
