import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async function (order: TOrder) {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderData = async function (queryParam: any) {
  const result = await OrderModel.find(queryParam);
  console.log(result);
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderData,
};
