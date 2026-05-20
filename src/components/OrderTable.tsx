import type { Order, OrderStatus } from "../types/orderTypes";
import { formatDate } from "../utils/formatDate";
import { useDragScroll } from "../hooks/useDragScroll";

interface Props {
  orders: Order[];
  onEdit: (order: Order) => void;
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

export default function OrderTable({ orders, onEdit }: Props) {
  const { ref, handlers } = useDragScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...handlers}
      className="w-full overflow-x-auto select-none rounded-lg border">
      <div className="min-w-[900px] cursor-grab active:cursor-grabbing lg:cursor-default">
        <table className="min-w-full table-fixed text-sm">
          <thead className="bg-gray-100 h-[60px]">
            <tr>
              <th scope="col" className="w-[140px] px-4 py-3 text-center">
                شماره سفارش
              </th>
              <th scope="col" className="w-[160px] px-4 py-3 text-center">
                مشتری
              </th>
              <th scope="col" className="w-[140px] px-4 py-3 text-center">
                محصول
              </th>
              <th scope="col" className="w-[60px] px-4 py-3 text-center">
                تعداد
              </th>
              <th scope="col" className="w-[160px] px-4 py-3 text-center">
                مبلغ
              </th>
              <th scope="col" className="w-[140px] px-4 py-3 text-center">
                وضعیت
              </th>
              <th scope="col" className="w-[100px] px-4 py-3 text-center">
                تاریخ
              </th>
              <th className="w-[140px] px-4 py-3 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-200 odd:bg-gray-100 even:bg-white">
                <td className="px-4 py-3">{order.id}</td>

                <td className="px-4 py-3">{order.customerName}</td>

                <td className="px-4 py-3">{order.productName}</td>

                <td className="px-4 py-3">{order.quantity}</td>

                <td className="px-4 py-3">
                  {order.totalPrice.toLocaleString()} تومان
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`block w-full rounded-full px-2 py-1 text-xs ${statusStyles[order.status]}`}>
                    {statusMap[order.status]}
                  </span>
                </td>

                <td className="px-4 py-3">
                  {(() => {
                    const formatted = formatDate(order.createdAt);

                    return (
                      <div className="flex flex-col leading-5">
                        <span>{formatted.date}</span>
                        <span>{formatted.time}</span>
                      </div>
                    );
                  })()}
                </td>

                <td className="px-4 py-3">
                  <button
                    aria-label="Change order status"
                    onClick={() => onEdit(order)}
                    className="rounded-md bg-blue-500 px-3 py-2 text-white text-md outline-none hover:bg-blue-600">
                    تغییر وضعیت
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
