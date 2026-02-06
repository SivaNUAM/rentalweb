import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Concierge from "../pages/Concierge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "about", element: <About /> },
      {path: "concierge", element:<Concierge />}
    ],
  },
]);
