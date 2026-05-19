import { useEffect } from "react";
import type { Order, OrderStatus } from "../types/orderTypes";

interface Props {
  order: Order | null;
  onClose: () => void;
  onSave: (orderId: string, status: OrderStatus) => void;
}

const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const statuses: OrderStatus[] = [
  "completed",
  "processing",
  "pending",
  "cancelled",
];
const statusMap = {
  pending: "در انتظار",
  processing: "در حال پردازش",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};

export default function OrderModal({ order, onClose, onSave }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!order) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        className="relative z-10 w-[400px] rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}>
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h2 className="mb-4 text-lg font-bold">تغییر وضعیت سفارش</h2>

          <div className="mb-4">
            <p className="text-sm mb-2">سفارش: {order.id}</p>

            <div className="flex flex-col gap-2">
              {statuses.map((status) => (
                <button
                  aria-label="updade order status"
                  key={status}
                  onClick={() => {
                    onSave(order.id, status);
                    onClose();
                  }}
                  className={`rounded border px-3 py-2 text-sm  ${statusStyles[status]}`}>
                  {statusMap[status]}
                </button>
              ))}
            </div>
          </div>

          <button
            aria-label="close modal"
            onClick={onClose}
            className="mt-4 text-sm text-gray-500">
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
