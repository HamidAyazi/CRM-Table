import { useCallback, useEffect, useState } from "react";
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
    totalItems,
    updateOrderStatus,
    loading,
    error,
  } = useOrders();

  //update URL and filters to match user's prefered table size
  const handlePageSizeChange = useCallback(
    (size: number) => {
      const safeSize = Math.min(20, Math.max(1, size || 1));

      setFilters({
        pageSize: safeSize,
        page: 1,
      });
    },
    [setFilters],
  );

  const [searchInput, setSearchInput] = useState(filters.search);
  
  //adding debounce in search params with 300ms delay
  useEffect(() => {
    const t = setTimeout(() => {
      setFilters({
        search: searchInput,
        page: 1,
      });
    }, 300);

    return () => clearTimeout(t);
  }, [searchInput]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // selected Order for Modal component
  return (
    <main className="p-2 max-w-6xl m-4">
      <h1 className="text-2xl font-bold">مدیریت سفارش‌ها</h1>

      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
        <SearchInput value={searchInput} onChange={setSearchInput} />

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
          <LoadingState rowNumber={filters.pageSize} />
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
              totalItems={totalItems}
              pageSize={filters.pageSize}
              onPageChange={(page) => setFilters({ page })}
              onPageSizeChange={handlePageSizeChange}
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
