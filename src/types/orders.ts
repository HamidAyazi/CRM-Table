export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  status: OrderStatus;
  createdAt: string;
  totalPrice: number;
}
