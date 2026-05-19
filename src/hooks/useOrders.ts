import { useMemo } from "react";
import { mockOrders } from "../data/mockOrders";
import { paginate } from "../utils/paginate";
import { processOrders } from "../utils/processOrders";
import { useQueryParams } from "./useQueryParams";

const PAGE_SIZE = 10;

export function useOrders() {
  const { filters, setFilters } = useQueryParams();

  // filter and sort
  const processedOrders = useMemo(() => {
    return processOrders(mockOrders, filters);
  }, [filters]);

  // paginate
  const paginatedOrders = useMemo(() => {
    return paginate(
      processedOrders,
      filters.page,
      PAGE_SIZE
    );
  }, [processedOrders, filters.page]);

  const totalPages = Math.ceil(
    processedOrders.length / PAGE_SIZE
  );

  return {
    orders: paginatedOrders,
    filters,
    setFilters,
    totalPages,
    totalItems: processedOrders.length,
  };
}