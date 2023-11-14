import {getListAllUser} from "./user-api.jsx";
import {ContentHeader} from "../../component/content-header/content-header.jsx";
import Table from "../../component/table/table.jsx";
import {useEffect, useState} from "react";
import Pagination from "../../component/table/pagination.jsx";

export default function User() {
    const [dataUser, setDataUser] = useState([]);
    const [pageDetails, setPageDetails] = useState({
        pageNum: 1,
        pageSize: 10
    });

    const getAllUser = async (pageNum, pageSize) => {
        const response = await getListAllUser(pageNum, pageSize, null);
        setDataUser(response?.data);
    }
    useEffect(() => {
        getAllUser(pageDetails.pageNum, pageDetails.pageSize);
    }, [pageDetails]);

    const tableHeader = [
        {
            label: "STT",
            field: "key",
            type: "string",
        },
        {
            label: "Mã nhân viên",
            field: "staffCode",
            type: "string",
        },
        {
            label: "Tên đăng nhập",
            field: "username",
            type: "string",
        },
        {
            label: "Tên nhân viên",
            field: "fullName",
            type: "string",
        },
        {
            label: "Tổ chức",
            field: "orgName",
            type: "object",
            objField: "orgInfo"
        },
        {
            label: "Email",
            field: "email",
            type: "string",
        },
        {
            label: "Số điện thoại",
            field: "phoneNumber",
            type: "string",
        },
        {
            label: "Trạng thái",
            field: "status",
            type: "string",
        },
        {
            label: "",
            field: "action",
            type: "string",
        }
    ];

    return (
        <>
            <ContentHeader label="Người dùng hệ thống" scr="Quản lý người dùng"></ContentHeader>
            <Table header={tableHeader} data={dataUser.content} paging={pageDetails}/>
            {dataUser.content && <Pagination
                currentPage={pageDetails.pageNum}
                totalItem={dataUser.totalElements}
                itemPerPage={10}
                onChangePage={(page, size) => {
                    if (pageDetails.pageNum !== page || pageDetails.pageSize !== size) {
                        setPageDetails({pageNum: page, pageSize: size});
                    }
                }}
            />
            }
        </>

    )
}
