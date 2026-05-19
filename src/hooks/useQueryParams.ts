import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { OrdersFilters, SortOption } from "../types/ordersFilters";
import type { OrderStatus } from "../types/orders";

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // reading url to update filters
  const filters: OrdersFilters = useMemo(() => {
    return {
      search: searchParams.get("search") ?? "",
      status: (searchParams.get("status") as OrderStatus | "all") ?? "all",
      sort: (searchParams.get("sort") as SortOption) ?? "date_desc",
      page: Number(searchParams.get("page") ?? 1),
    };
  }, [searchParams]);

  // updating url based on filters
  const setFilters = (updates: Partial<OrdersFilters>) => {
    const next = new URLSearchParams(searchParams);

    if (updates.search !== undefined) {
      next.set("search", updates.search);
    }

    if (updates.status !== undefined) {
      next.set("status", updates.status);
    }

    if (updates.sort !== undefined) {
      next.set("sort", updates.sort);
    }

    if (updates.page !== undefined) {
      next.set("page", String(updates.page));
    }

    setSearchParams(next);
  };

  return {
    filters,
    setFilters,
  };
}
