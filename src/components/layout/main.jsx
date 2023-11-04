import Header from "./header.jsx";
import "../../css/main-layout.css"
import Menu from "./menu.jsx";
import Dashboard from "../page/Dashboard/dashboard.jsx";

function MainLayout() {
    return (
        <div className="m-layout">
            <div className="m-header">
                <Header></Header>
            </div>
            <div className="m-body">
                <div className="m-menu">
                    <Menu></Menu>
                </div>
                <div className="m-content-container">
                    <Dashboard></Dashboard>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;