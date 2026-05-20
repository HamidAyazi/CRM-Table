import { BrowserRouter } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";

export default function App() {
  return (
    <BrowserRouter>
      <OrdersPage />
    </BrowserRouter>
  );
}
