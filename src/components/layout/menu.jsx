import "../../css/main-layout.css"
import {Route} from "react-router-dom";

export default function Menu() {

    const menu = [
        {
            path: "/dashboard",
            label: "Dashboard"
        },
        {
            path: "/function",
            label: "Chức năng hệ thống"
        },
        {
            path: "/user",
            label: "Người dùng hệ thống"
        }
    ]

    return (<>
        <div className="m-menu-logo">
            ADMINISTRATION
        </div>
        <div className="m-menu-item">
            <br/>
            {
                menu.map((item, key) => {
                    return (
                        <a
                            className="m-menu-text"
                            href={item.path}
                            key={key}
                        >
                            {item.label}
                        </a>
                    );
                })
            }
        </div>
    </>)
}