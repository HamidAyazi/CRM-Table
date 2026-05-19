import type { Order, OrderStatus } from "../types/orderTypes";

interface Props {
  order: Order | null;
  onClose: () => void;
  onSave: (
    orderId: string,
    status: OrderStatus
  ) => void;
}

const statuses: OrderStatus[] = [
  "pending",
  "processing",
  "completed",
  "cancelled",
];

export default function OrderModal({
  order,
  onClose,
  onSave,
}: Props) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-lg font-bold">
          تغییر وضعیت سفارش
        </h2>

        <div className="mb-4">
          <p className="text-sm mb-2">
            سفارش: {order.id}
          </p>

          <div className="flex flex-col gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  onSave(order.id, status);
                  onClose();
                }}
                className="rounded border px-3 py-2 text-sm"
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500"
        >
          بستن
        </button>
      </div>
    </div>
  );
}