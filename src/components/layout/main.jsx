import Header from "./header.jsx";
import "../../css/main-layout.css"
import Menu from "./menu.jsx";
import Dashboard from "../page/Dashboard/dashboard.jsx";
import {useState} from "react";
import User from "../page/User/user.jsx";
import {Link, Route, Routes} from "react-router-dom";
import Function from "../page/SystemFunction/function.jsx";
import Province from "../page/Province/province.jsx";

function MainLayout() {
    const [openMenu, setOpenMenu] = useState(true);

    const [routerList, setRouterList] = useState([
        {
            path: "/user",
            component: <User/>
        },
        {
            path: "/dashboard",
            component: <Dashboard/>
        },
        {
            path: "/function",
            component: <Function/>
        },
        {
            path: "/province",
            component: <Province/>
        }
    ])

    return (<div className="m-layout">
        <div className="m-menu">
            <Menu></Menu>
        </div>
        <div className="m-content-container">
            <div className="m-header">
                <Header setOpenMenu={setOpenMenu} openMenu={openMenu}></Header>
            </div>
            <div className="m-content">
                <Routes>
                    {routerList.map(item => (
                        <Route path={item.path} element={item.component}></Route>
                    ))}
                </Routes>
            </div>
        </div>
    </div>)
}

export default MainLayout;