import { useEffect, useMemo, useState } from "react";
import { mockOrders } from "../data/mockOrders";
import { paginate } from "../utils/paginate";
import { processOrders } from "../utils/processOrders";
import { useQueryParams } from "./useQueryParams";
import type { OrderStatus, Order } from "../types/orderTypes";


export function useOrders() {
  const { filters, setFilters } = useQueryParams();
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //simulate fetching data since we are using mock data
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setOrdersData(mockOrders);
        setLoading(false);
      } catch (err) {
        setError("خطا در دریافت سفارش‌ها");
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // applying filters and sorts on data
  const processedOrders = useMemo(() => {
    return processOrders(ordersData, filters);
  }, [ordersData, filters]);

  // paginating filtered data
  const paginatedOrders = useMemo(() => {
    return paginate(processedOrders, filters.page, filters.pageSize);
  }, [processedOrders, filters.page]);

  const totalPages = Math.ceil(processedOrders.length / filters.pageSize);

  const updateOrderStatus = (orderId: string, status: OrderStatus) => { // update order status
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
