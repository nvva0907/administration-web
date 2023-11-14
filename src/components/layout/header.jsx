import "../../css/main-layout.css"
import {Bars3Icon, ArrowRightOnRectangleIcon} from '@heroicons/react/20/solid'

export default function Header() {
    const handleClick = () => {
        let menu = document.body.querySelector(`.m-menu`);
        if (menu.classList.contains("hide")) {

            menu.classList.remove("hide");
            menu.classList.add("show");
        } else {

            menu.classList.remove("show");
            menu.classList.add("hide");
        }
    };
    return (
        <div className="bg-blue color-white grid grid-cols-6 items-center pl-2 pr-2 h-full">
            <div className="col-start-1">
                <div onClick={handleClick}>
                    <Bars3Icon width={24} style={{cursor: "pointer"}}/>
                </div>
            </div>

            <div className="col-start-6 flex justify-end">
                <div>
                    <ArrowRightOnRectangleIcon width={24} style={{cursor: "pointer"}}/>
                </div>
            </div>
        </div>
    )
}