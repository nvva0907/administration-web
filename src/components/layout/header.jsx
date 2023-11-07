import "../../css/main-layout.css"
import {Bars3Icon, ArrowRightOnRectangleIcon} from '@heroicons/react/20/solid'

export default function Header(props) {
    const handleClick = () => {
       let menu = document.body.querySelector(`.m-menu`);
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
            menu.classList.add("show");
        } else {
            menu.classList.remove("show");
            menu.classList.add("hidden");
        }
    };

    return (<>
        <div className="flex items-center w-full justify-between">
            <div style={{marginLeft:"20px"}} onClick={handleClick}><Bars3Icon width={24} style={{cursor: "pointer"}}/></div>
            <div style={{marginRight:"20px"}}>
                <ArrowRightOnRectangleIcon width={24} style={{cursor: "pointer"}}/>
            </div>
        </div>
    </>)
}