import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./style.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/post/:id",
                element: <Single />,
            },
            {
                path: "/write",
                element: <Write />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return (
        <div className="App">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
export default App;
