import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Errors";
import Pages from "../pages";
import Cart from "@/pages/Cart";
import Product from "@/pages/Product";

const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // Tidak perlu path: '/' jika index diatur true
                element: <Pages />,
            },
            {
                path: "cart", 
                element: <Cart />,
            },
            {
                path: "product", 
                element: <Product />,
            },
        ],
    },
]);

export default Router;
