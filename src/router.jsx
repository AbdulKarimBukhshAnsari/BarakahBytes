import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./Components/Header/Header";


const router = createBrowserRouter ([{
    path : '/',
    element : <App /> ,
}])


export default router