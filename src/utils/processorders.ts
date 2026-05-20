import type { Order, OrdersFilters } from "../types/orderTypes";
import { normalizeText } from "./normalizeText";

export function processOrders(
  orders: Order[],
  filters: OrdersFilters,
): Order[] {
  let result = [...orders];

  // search
  if (filters.search.trim()) {
    const search = normalizeText(filters.search);
    result = result.filter((o) => {
      const id = normalizeText(o.id); // normalize text to match both Farsi and English numbers
      const name = normalizeText(o.customerName); // normalize text via toLowerCase
      return id.includes(search) || name.includes(search);
    });
  }

  // filter
  if (filters.status !== "all") {
    result = result.filter((o) => o.status === filters.status);
  }

  // sort
  result.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return filters.sort === "date_desc" ? dateB - dateA : dateA - dateB;
  });

  return result;
}
