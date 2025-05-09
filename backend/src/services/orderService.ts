import {
  createOrder,
  getOrderById,
  getAllOrders,
} from "../repositories/orderRepository";
import { Order } from "../models/Order";

export async function createNewOrder(order: Partial<Order>): Promise<Order> {
  return await createOrder(order);
}

export async function fetchOrderById(id: string): Promise<Order | null> {
  return await getOrderById(id);
}

export async function fetchAllOrders(): Promise<Order[]> {
  return await getAllOrders();
}

// export async function updateOrderStatus(order: Partial<Order>): Promise<Order> {
//   return await updateOrder(order);
// }
