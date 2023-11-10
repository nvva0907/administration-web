import {HomeIcon, ChevronRightIcon} from "@heroicons/react/24/solid/index.js";

export const ContentHeader = (props) => {
    return (
        <div className="flex flex-col justify-center color-white w-full bg-blue h-28 rounded-bl-40 content-header">
            <div style={{marginLeft: "40px"}}>
                <h2 style={{marginBottom: "10px"}}>{props.label}</h2>
                <div className="flex flex-row gap-4 items-center mt-3">
                    <HomeIcon width={15} style={{cursor: "pointer"}}/>
                    <ChevronRightIcon width={12}/>
                    <p style={{fontSize: "12px", cursor: "pointer"}}>Quản trị hệ thống</p>
                    <ChevronRightIcon width={12}/>
                    <p style={{fontSize: "12px", cursor: "pointer"}}>{props.scr}</p>
                </div>
            </div>
        </div>)
}
