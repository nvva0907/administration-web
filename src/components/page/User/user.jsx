import {getListAllUser} from "./user-api.jsx";
import {ContentHeader} from "../../component/content-header/content-header.jsx";

export default function User() {

    const handleClick = async () => {
        const response = await getListAllUser(1, 10, null);
        if (response != null) {
            alert("Call api success!");
        }
    }

    return (<>
        <ContentHeader label="Người dùng hệ thống" scr="Quản lý người dùng"></ContentHeader>
        <div className="m-body">
            <h1 onClick={handleClick}>User</h1>
        </div>
    </>)
}
