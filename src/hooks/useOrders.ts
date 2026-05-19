import { useEffect, useMemo, useState } from "react";
import { mockOrders } from "../data/mockOrders";
import { paginate } from "../utils/paginate";
import { processOrders } from "../utils/processOrders";
import { useQueryParams } from "./useQueryParams";
import type { OrderStatus } from "../types/orderTypes";

const PAGE_SIZE = 10;

export function useOrders() {
  const { filters, setFilters } = useQueryParams();
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setOrdersData(mockOrders);
        setLoading(false);
      } catch (err) {
        setError("خطا در دریافت سفارش‌ها");
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // filter and sort
  const processedOrders = useMemo(() => {
    return processOrders(ordersData, filters);
  }, [ordersData, filters]);

  // paginate
  const paginatedOrders = useMemo(() => {
    return paginate(processedOrders, filters.page, PAGE_SIZE);
  }, [processedOrders, filters.page]);

  const totalPages = Math.ceil(processedOrders.length / PAGE_SIZE);

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrdersData((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order,
      ),
    );
  };

  return {
    orders: paginatedOrders,
    filters,
    setFilters,
    totalPages,
    totalItems: processedOrders.length,
    updateOrderStatus,
    loading,
    error
  };
}
