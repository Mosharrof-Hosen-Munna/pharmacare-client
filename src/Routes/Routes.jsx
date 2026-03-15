import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        Component:MainLayout,
        children:[
            {  index: true, path:"/", element:<Home/>},
            
        ] 
    }
])

export default Router