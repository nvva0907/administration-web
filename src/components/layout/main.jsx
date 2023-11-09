import Header from "./header.jsx";
import "../../css/main-layout.css"
import Menu from "./menu.jsx";
import Dashboard from "../page/Dashboard/dashboard.jsx";
import User from "../page/User/user.jsx";
import {Route, Routes} from "react-router-dom";
import Function from "../page/SystemFunction/function.jsx";
import Province from "../page/Province/province.jsx";

function MainLayout() {
    const routerList = [
        {path: "/user", component: <User/>},
        {path: "/dashboard", component: <Dashboard/>},
        {path: "/", component: <Dashboard/>},
        {path: "/function", component: <Function/>},
        {path: "/province", component: <Province/>}
    ]

    return (<div className="flex text-black">
        <div className="h-screen bg-blue m-menu">
            <Menu></Menu>
        </div>
        <div className="w-full h-screen ml-250">
            <div className="flex bg-blue color-white font-medium h-7-100">
                <Header></Header>
            </div>
            <div>
                <Routes>
                    {routerList.map(item => (<Route path={item.path} element={item.component}></Route>))}
                </Routes>
            </div>
        </div>
    </div>)
}

export default MainLayout;