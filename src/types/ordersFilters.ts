import type { OrderStatus } from "./orders";

export type SortOption = "date_asc" | "date_desc";

export interface OrdersFilters {
  search: string;
  status: OrderStatus | "all";
  sort: SortOption;
  page: number;
}