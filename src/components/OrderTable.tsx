import type { Order } from "../types/orders";

interface Props {
  orders: Order[];
}
const statusMap = {
  pending: "در انتظار",
  processing: "در حال پردازش",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};

export default function OrderTable({ orders }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-right">شماره سفارش</th>
            <th className="px-4 py-3 text-right">مشتری</th>
            <th className="px-4 py-3 text-right">محصول</th>
            <th className="px-4 py-3 text-right">تعداد</th>
            <th className="px-4 py-3 text-right">مبلغ</th>
            <th className="px-4 py-3 text-right">وضعیت</th>
            <th className="px-4 py-3 text-right">تاریخ</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">{order.id}</td>

              <td className="px-4 py-3">
                {order.customerName}
              </td>

              <td className="px-4 py-3">
                {order.productName}
              </td>

              <td className="px-4 py-3">
                {order.quantity}
              </td>

              <td className="px-4 py-3">
                {order.totalPrice.toLocaleString()} تومان
              </td>

              <td className="px-4 py-3">
                {statusMap[order.status]}
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