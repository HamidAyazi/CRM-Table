import type { Order, OrderStatus } from "../types/orders";

interface Props {
  orders: Order[];
}
const statusMap = {
  pending: "در انتظار",
  processing: "در حال پردازش",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};
const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function OrderTable({ orders }: Props) {
  if (orders.length === 0) {
    return <div className="p-4 text-center">هیچ سفارشی وجود ندارد</div>;
  }
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm" role="table">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-4 py-3 text-center">
              شماره سفارش
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              مشتری
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              محصول
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              تعداد
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              مبلغ
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              وضعیت
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              تاریخ
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{order.id}</td>

              <td className="px-4 py-3">{order.customerName}</td>

              <td className="px-4 py-3">{order.productName}</td>

              <td className="px-4 py-3">{order.quantity}</td>

              <td className="px-4 py-3">
                {order.totalPrice.toLocaleString()} تومان
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2 py-1 text-xs ${statusStyles[order.status]}`}>
                  {statusMap[order.status]}
                </span>
              </td>

              <td className="px-4 py-3">
                {new Date(order.createdAt).toLocaleDateString("fa-IR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
