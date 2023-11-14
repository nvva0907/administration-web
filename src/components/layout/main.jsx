import Header from "./header.jsx";
import "../../css/main-layout.css"
import "../../css/grid.css"
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
    ];

    return (
        <div className="flex min-h-screen text-black">
            <Menu></Menu>
            <div className="w-full grid grid-rows-12">
                <div className="row-span-1">
                    <Header></Header>
                </div>
                <div className="row-span-11 grid grid-rows-12">
                    <Routes>
                        {routerList.map(item => (<Route path={item.path} element={item.component}></Route>))}
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default MainLayout;