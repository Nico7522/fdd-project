import App from "../App";
import FruitsPage from "../pages/fruits/fruits";
import  { RouteObject } from 'react-router';
import HomePage from "../pages/home/home-page";
import SabresPage from "../pages/sabres/sabres";
import Test from "../utils/concat";
import LieuxPage from "../pages/lieux/lieux-page";


export const routes: RouteObject[] = [
    {
        path: "",
        element: <App />,
        children : [
            {
                index: true,
                element: <HomePage />
                
            },
            {
                path: "fruits",
                element: <FruitsPage />
            },
            {
                path: "sabres",
                element: <SabresPage />
            },
            {
                path: "lieux",
                element: <LieuxPage />
            },
            {
                path: "test",
                element: <Test />
            }
        ]
    }
]