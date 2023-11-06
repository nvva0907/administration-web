import "../../css/main-layout.css"
import {Link, Route} from "react-router-dom";
import {useState} from "react";

export default function Menu() {

    const [menu, setMenu] = useState([
        {
            path: "/dashboard",
            label: "Dashboard",
            style: "m-menu-text",
            key: 1
        },
        {
            path: "/function",
            label: "Chức năng hệ thống",
            style: "m-menu-text",
            key: 2
        },
        {
            path: "/user",
            label: "Người dùng hệ thống",
            style: "m-menu-text",
            key: 3
        },
        {
            path: "/province",
            label: "Tỉnh thành",
            style: "m-menu-text",
            key: 4
        }
    ])

    const switchMenu = (key) =>{
        const updatedMenu = menu.map(item =>({
            ...item,
            style: item.key === key ? "m-menu-text default" : "m-menu-text"
        }))
        setMenu(updatedMenu);
    }

    return (<>
        <div className="m-menu-logo">
            ADMINISTRATION
        </div>
        <div className="m-menu-item">
            <br/>
            {menu.map(item => (
                <Link
                    to={item.path}
                    className={item.style}
                    onClick={() => switchMenu(item.key)}
                    key={item.key}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    </>)
}