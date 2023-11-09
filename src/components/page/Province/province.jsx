import {ContentHeader} from "../../component/content-header/content-header.jsx";
import {useEffect, useState} from "react";
import {getListProvinces} from "./province-api.jsx";
import Table from "../../component/table/table.jsx";

export default function Province() {
    const [data,setData] = useState([]);

    const getAllProvince = async ()=>{
        const response = await getListProvinces(5, 5, null);
        setData(response?.data?.pageData);
    }
    useEffect(() => {
        getAllProvince();
    }, []);

    const TABLE_HEAD = [
        {
            label : "STT",
            field: "key"
        },
        {
            label : "Mã tỉnh thành",
            field: "codeName"
        },
        {
            label : "Tên tỉnh thành",
            field: "fullName"
        },
        {
            label : "Tên tiếng anh",
            field: "fullNameEn"
        },
        {
            label : "Trạng thái",
            field: "status"
        },
        {
            label : "",
            field: ""
        }
    ];

    return (
        <>
            <ContentHeader label="Tỉnh thành" scr="Danh sách tỉnh thành"></ContentHeader>
            <div className="flex color-blue font-medium bg-light-gray w-full h-full justify-center items-center">
                <Table header={TABLE_HEAD} data={data}></Table>
            </div>
        </>
    )
}
