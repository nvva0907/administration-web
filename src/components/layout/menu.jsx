import "../../css/main-layout.css"
import {Link, Route} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Menu() {
    const menuText = "flex text-sm font-bold color-blue h-8 items-center pl-2 menu-hover"
    const menuTextActive = "flex text-sm font-medium color-white bg-blue h-8 items-center pl-2 rounded-md"
    const [menu, setMenu] = useState([
        {
            path: "/dashboard",
            label: "Dashboard",
            style: menuText,
            key: 1
        },
        {
            path: "/function",
            label: "Chức năng hệ thống",
            style: menuText,
            key: 2
        },
        {
            path: "/user",
            label: "Người dùng hệ thống",
            style: menuText,
            key: 3
        },
        {
            path: "/province",
            label: "Tỉnh thành",
            style: menuText,
            key: 4
        }
    ])
    const switchMenu = (key) => {
        const updatedMenu = menu.map(item => ({
            ...item,
            style: item.key === key ? `${menuTextActive}` : `${menuText}`
        }))
        setMenu(updatedMenu);
    }
    return (
        <div className="h-screen m-menu">
            <div className="flex justify-center text-white h-7-100 items-center bg-blue">
                ADMINISTRATION
            </div>
            <div className="flex flex-col w-250 gap-3 h-93-100 pl-5 pr-5 box-border bg-light rounded-t-xl">
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
        </div>
    )
}