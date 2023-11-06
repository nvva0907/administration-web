import "../../css/main-layout.css"
import {Bars3Icon, ArrowRightOnRectangleIcon} from '@heroicons/react/20/solid'

export default function Header(props) {
    const handleClick = () => {
        props.setOpenMenu(!props.openMenu);
    };

    return (<>
        <div className="m-header-menu">
            <div style={{marginLeft:"20px"}} onClick={handleClick}><Bars3Icon width={24} style={{cursor: "pointer"}}/></div>
            <div style={{marginRight:"20px"}}>
                <ArrowRightOnRectangleIcon width={24} style={{cursor: "pointer"}}/>
            </div>
        </div>
    </>)
}