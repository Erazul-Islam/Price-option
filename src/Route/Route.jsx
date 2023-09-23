import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import Dashboard from "../Components/Dashboard/Dashboard";
import Product from "./Product.jsx/Product";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: "/products/:id",
                element: <Product></Product>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default myCreatedRoute;