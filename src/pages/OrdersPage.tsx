import { useState } from "react";
import OrderTable from "../components/OrderTable";
import SearchInput from "../components/SearchInput";
import StatusFilter from "../components/StatusFilter";
import SortSelect from "../components/SortSelect";
import Pagination from "../components/Pagination";
import OrderModal from "../components/OrderModal";
import LoadingState from "../components/LoadingState";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import { useOrders } from "../hooks/useOrders";
import type { Order } from "../types/orderTypes";

export default function OrdersPage() {
  const {
    orders,
    filters,
    setFilters,
    totalPages,
    updateOrderStatus,
    loading,
    error,
  } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  return (
    <main className="p-2 max-w-6xl m-4">
      <h1 className="text-2xl font-bold">مدیریت سفارش‌ها</h1>

      {/* seach field */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
        <SearchInput
          value={filters.search}
          onChange={(value) =>
            setFilters({
              search: value,
              page: 1,
            })
          }
        />

        <StatusFilter
          value={filters.status}
          onChange={(value) =>
            setFilters({
              status: value,
              page: 1,
            })
          }
        />

        <SortSelect
          value={filters.sort}
          onChange={(value) =>
            setFilters({
              sort: value,
            })
          }
        />
      </div>
      <div className="min-w-[400px]">
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} />
        ) : orders.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <OrderTable orders={orders} onEdit={setSelectedOrder} />
            <Pagination
              currentPage={filters.page}
              totalPages={totalPages}
              onPageChange={(page) => setFilters({ page })}
            />
          </>
        )}
      </div>
      <OrderModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onSave={updateOrderStatus}
      />
    </main>
  );
}
