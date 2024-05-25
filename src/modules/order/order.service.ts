import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async function (order: TOrder) {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderData = async function (queryParam: string | object) {
  const result = await OrderModel.find({ email: queryParam });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderData,
};
