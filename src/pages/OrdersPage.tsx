import OrderTable from "../components/OrderTable";
import { mockOrders } from "../data/mockOrders";

export default function OrdersPage() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        مدیریت سفارش‌ها
      </h1>

      <OrderTable orders={mockOrders} />
    </main>
  );
}