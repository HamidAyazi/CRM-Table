import { useMemo } from "react";
import type { OrdersFilters } from "../types/ordersFilters";
import type { OrderStatus } from "../types/orders";

export function useQueryParams(): OrdersFilters {
  const filters = useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    const search = params.get("search") ?? "";

    const status = (params.get("status") as OrderStatus | "all") ?? "all";

    const sort =
      (params.get("sort") as "date_asc" | "date_desc") ?? "date_desc";

    const page = Number(params.get("page") ?? 1);

    return {
      search,
      status,
      sort,
      page,
    };
  }, []);

  return filters;
}