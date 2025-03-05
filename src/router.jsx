import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashBoardPage";
import ProtectedRoute from "./utils/ProtectedRouter";



const router = createBrowserRouter ([{
    path : '/',
    element : <App /> ,
    children : [
        {
            path : '',
            element : <HomePage /> 
        }
        ,
        {
            path : 'dashboard',
            element :( <ProtectedRoute >
             <DashboardPage />
             </ProtectedRoute>

            )
        }

    ]
}])


export default router