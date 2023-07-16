import App from "../App";
import FruitsPage from "../pages/fruits/fruits";
import  { RouteObject } from 'react-router';
import HomePage from "../pages/home/home-page";
import SabresPage from "../pages/sabres/sabres";


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
            }
        ]
    }
]