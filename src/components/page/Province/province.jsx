import {ContentHeader} from "../../component/content-header/content-header.jsx";
import {useEffect, useState} from "react";
import {getListProvinces} from "./province-api.jsx";
import Table from "../../component/table/table.jsx";

export default function Province() {
    const [dataProvince, setDataProvince] = useState([]);

    const getAllProvince = async () => {
        const response = await getListProvinces(5, 10, null);
        setDataProvince(response?.data?.pageData);
    }
    useEffect(() => {
        getAllProvince();
    }, []);

    const tableHeader = [
        {
            label: "STT",
            field: "key",

        },
        {
            label: "Mã tỉnh thành",
            field: "codeName"
        },
        {
            label: "Tên tỉnh thành",
            field: "fullName"
        },
        {
            label: "Tên tiếng anh",
            field: "fullNameEn"
        },
        {
            label: "Trạng thái",
            field: "status"
        },
        {
            label: "",
            field: ""
        }
    ];

    return (
        <>
            <ContentHeader label="Tỉnh thành" scr="Danh sách tỉnh thành"></ContentHeader>
            <Table header={tableHeader} data={dataProvince}/>
        </>
    )
}
