import {getListAllUser} from "./user-api.jsx";

export default function User() {

    const handleClick = async () => {
        const response = await getListAllUser(1, 10, null);
        if (response != null) {
            alert("Call api success!");
        }
    }

    return (<>
        <div className="m-body-header">
            <div style={{marginLeft: "40px"}}>
                <h1 style={{marginBottom: "10px"}}>Người dùng hệ thống</h1>
            </div>
        </div>
        <div className="m-body">
            <h1 onClick={handleClick}>User</h1>
        </div>
    </>)
}
