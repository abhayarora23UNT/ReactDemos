import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'


const AppLayout = () => {
    console.log("Body is ", <Body />);
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurents/:resId",
                    element: <RestaurantMenu />
                }
            ],
            errorElement: <Error />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }

    ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

