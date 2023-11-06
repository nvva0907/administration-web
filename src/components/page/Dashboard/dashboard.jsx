import {getListAllUser} from "./dashboard-api.jsx";

export default function Dashboard() {

    const handleClick = async () =>{
        const response = await getListAllUser(1,10,null);
        if(response != null){
            console.log(response)
            alert("Call api success!");
        }
    }
    return (
        <>
            <div className="m-content-header">
                <h1>Dashboard</h1>
                <p>Welcome back to the Dashboard.</p>
            </div>
            <div className="m-content">
                <button onClick={handleClick}>TEST AXIOS</button>
            </div>
        </>
    )
}

