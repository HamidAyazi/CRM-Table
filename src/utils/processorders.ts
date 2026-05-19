import type { Order, OrdersFilters } from "../types/orderTypes";
import { paginate } from "./paginate";

export function processOrders(
  orders: Order[],
  filters: OrdersFilters,
): Order[] {
  let result = [...orders];

  // search
  if (filters.search.trim()) {
    const search = filters.search.toLowerCase();

    result = result.filter(
      (o) =>
        o.customerName.toLowerCase().includes(search) ||
        o.id.toLowerCase().includes(search),
    );
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

  // pagination
  result = paginate(result, filters.page, 20);

  return result;
}
