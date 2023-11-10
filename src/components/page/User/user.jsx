import {getListAllUser} from "./user-api.jsx";
import {ContentHeader} from "../../component/content-header/content-header.jsx";
import Table from "../../component/table/table.jsx";
import {useEffect, useState} from "react";

export default function User() {
    const [dataUser, setDataUser] = useState([]);

    const getAllUser = async () => {
        const response = await getListAllUser(2, 10, null);
        setDataUser(response?.data?.content);
    }
    useEffect(() => {
        getAllUser();
    }, []);

    const tableHeader = [
        {
            label: "STT",
            field: "key",

        },
        {
            label: "Mã nhân viên",
            field: "staffCode"
        },
        {
            label: "Tên đăng nhập",
            field: "username"
        },
        {
            label: "Tên nhân viên",
            field: "fullName"
        },
        {
            label: "Email",
            field: "email"
        },
        {
            label: "Số điện thoại",
            field: "phoneNumber"
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

    return (<>
        <ContentHeader label="Người dùng hệ thống" scr="Quản lý người dùng"></ContentHeader>
        <Table header={tableHeader} data={dataUser}/>
    </>)
}
