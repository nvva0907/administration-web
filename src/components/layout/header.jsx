import "../../css/main-layout.css"
import logo from "../../assets/logo.png"
import {Bars3Icon, ArrowRightOnRectangleIcon} from '@heroicons/react/20/solid'

export default function Header() {
    return (<>
        <div className="m-logo-container">
            {/*<img src={logo} className="m-logo" alt="logo"/>*/}
            <p>Administrator</p>
        </div>
        <div className="m-header-menu">
            <div><Bars3Icon width={24} style={{cursor: "pointer"}}/></div>
            <div><ArrowRightOnRectangleIcon width={24} style={{cursor: "pointer"}}/></div>
        </div>
    </>)
}