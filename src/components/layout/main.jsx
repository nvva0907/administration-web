import Header from "./header.jsx";
import "../../css/main-layout.css"
import Menu from "./menu.jsx";
import Dashboard from "../page/Dashboard/dashboard.jsx";
import {useState} from "react";

function MainLayout() {
    const [openMenu, setOpenMenu] = useState(true);

    return (<div className="m-layout">
        <div className={`m-menu ${openMenu ? 'm-menu-slide-in' : 'm-menu-slide-out'}`} >
            <Menu></Menu>
        </div>
        <div className="m-content-container">
            <div className="m-header">
                <Header setOpenMenu={setOpenMenu} openMenu={openMenu} ></Header>
            </div>
            <div className="m-content">
                <Dashboard></Dashboard>
            </div>
        </div>
    </div>)
}

export default MainLayout;