import Header from "./header.jsx";
import "../../css/main-layout.css"
import Menu from "./menu.jsx";
import Dashboard from "../page/Dashboard/dashboard.jsx";
import {useState} from "react";
import User from "../page/User/user.jsx";
import {Route, Routes} from "react-router-dom";
import Function from "../page/SystemFunction/function.jsx";

function MainLayout() {
    const [openMenu, setOpenMenu] = useState(true);

    const routerList = [{
        path: "/user", component: User
    }, {
        path: "/dashboard", component: Dashboard
    }]

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
                    <Route path="/user" element={<User/>}></Route>
                    <Route path="/function" element={<Function/>}></Route>
                    <Route path="/*" element={<Dashboard/>}></Route>
                </Routes>
            </div>
        </div>
    </div>)
}

export default MainLayout;