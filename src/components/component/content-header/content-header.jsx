import {HomeIcon, ChevronRightIcon} from "@heroicons/react/24/solid/index.js";

export const ContentHeader = (props) => {
    return (
        <div className="bg-blue grid grid-rows-2 gap-2 pl-20 rounded-bl-40 text-white">
            <div className="row-span-1">
                <h2>{props.label}</h2>
            </div>
            <div className="row-span-2">
                <div className="flex flex-row gap-4 items-center">
                    <HomeIcon width={15} style={{cursor: "pointer"}}/>
                    <ChevronRightIcon width={12}/>
                    <p style={{fontSize: "13px", cursor: "pointer"}}>Quản trị hệ thống</p>
                    <ChevronRightIcon width={12}/>
                    <p style={{fontSize: "13px", cursor: "pointer"}}>{props.scr}</p>
                </div>
            </div>
        </div>
    )
}
