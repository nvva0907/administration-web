import {ContentHeader} from "../../component/content-header/content-header.jsx";
import {useEffect, useState} from "react";
import {getListProvinces} from "./province-api.jsx";

export default function Province() {
    const [data,setData] = useState();

    const getAllProvince = async ()=>{
        const response = await getListProvinces(1, 10, null);
        setData(response?.data?.pageData);
        console.log(data);
    }
    useEffect(() => {
        console.log("chay qua")
        // getAllProvince();
    }, []);

    const TABLE_HEAD = ["STT", "Mã tỉnh thành", "Tên tỉnh thành", "Trạng thái", ""];

    return (
        <>
            <ContentHeader label="Tỉnh thành" scr="Danh sách tỉnh thành"></ContentHeader>
            <div className="flex color-blue font-medium bg-light-gray w-full h-full justify-center items-center">
                {/*<Table header={TABLE_HEAD} data={data}></Table>*/}
            </div>
        </>
    )
}
