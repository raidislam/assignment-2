import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderValidation from "./order.validation";

const orderCreate_C = async function (req: Request, res: Response) {
  try {
    const { order: orderData } = req.body;
    const orderValidData = orderValidation.parse(orderData);
    const result = await OrderService.createOrderIntoDB(orderValidData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

const getAllOrder_C = async function (req: Request, res: Response) {
  console.log(req.body);
  try {
    const email = req.query.email;
    let query = {};
    if (email) {
      query.email = email;
    }

    console.log("query", query);
    const result = await OrderService.getAllOrderData(query);

    res.status(200).json({
      success: true,
      message: `Orders fetched successfully!`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: error,
    });
  }
};

export const OrderController = {
  orderCreate_C,
  getAllOrder_C,
};
