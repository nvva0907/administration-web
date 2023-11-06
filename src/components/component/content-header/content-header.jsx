import {HomeIcon, ChevronRightIcon} from "@heroicons/react/24/solid/index.js";
import "./content-header.css"
export const ContentHeader = (props) => {
    return (<div className="m-body-header">
        <div style={{marginLeft: "40px"}}>
            <h2 style={{marginBottom: "10px"}}>{props.label}</h2>
            <div className="m-body-header-breadcrumbs">
                <HomeIcon width={15} style={{cursor: "pointer"}}/>
                <ChevronRightIcon width={12}/>
                <p style={{fontSize:"12px", cursor: "pointer"}}>Quản trị hệ thống</p>
                <ChevronRightIcon width={12}/>
                <p style={{fontSize:"12px", cursor: "pointer"}}>{props.scr}</p>
            </div>
        </div>
    </div>)
}
