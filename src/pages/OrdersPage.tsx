import OrderTable from "../components/OrderTable";
import SearchInput from "../components/SearchInput";
import { useOrders } from "../hooks/useOrders";
import StatusFilter from "../components/StatusFilter";
import SortSelect from "../components/SortSelect";
import Pagination from "../components/Pagination";

export default function OrdersPage() {
  const { orders, filters, setFilters, totalPages } = useOrders();

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="mb-6 text-2xl font-bold">مدیریت سفارش‌ها</h1>

      {/* seach field */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row">
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

      <OrderTable orders={orders} />
      <Pagination
        currentPage={filters.page}
        totalPages={totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
    </main>
  );
}
