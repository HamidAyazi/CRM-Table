import { useMemo } from "react";
import { mockOrders } from "../data/mockOrders";
import { useQueryParams } from "./useQueryParams";
import { processOrders } from "../utils/processorders";

export function useOrders() {
  const { filters, setFilters } = useQueryParams();

  const visibleOrders = useMemo(() => {
    return processOrders(mockOrders, filters);
  }, [filters, mockOrders]);

  return {
    orders: visibleOrders,
    filters,
    setFilters,
    total: mockOrders.length,
  };
}