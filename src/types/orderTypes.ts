export type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

export interface Order {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  status: OrderStatus;
  createdAt: string;
  totalPrice: number;
}

export type SortOption = "date_asc" | "date_desc";

export interface OrdersFilters {
  search: string;
  status: OrderStatus | "all";
  sort: SortOption;
  page: number;
  pageSize: number;
}
