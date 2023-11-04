import "../../css/main-layout.css"

export default function Menu() {
    return (
        <>
            <div className="m-menu-item">
                <a className="m-menu-text default" href="/dashboard">Dashboard</a>
                <a className="m-menu-text" href="/function">Chức năng hệ thống</a>
            </div>
        </>
    )
}