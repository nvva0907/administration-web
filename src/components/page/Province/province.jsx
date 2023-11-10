import {ContentHeader} from "../../component/content-header/content-header.jsx";
import {useEffect, useState} from "react";
import {getListProvinces} from "./province-api.jsx";
import Table from "../../component/table/table.jsx";
import Pagination from "../../component/table/pagination.jsx";

export default function Province() {
    const [dataProvince, setDataProvince] = useState([]);
    const [pageDetails, setPageDetails] = useState({
        pageNum: 1,
        pageSize: 10
    });
    const getAllProvince = async (pageNum, pageSize) => {
        const response = await getListProvinces(pageNum, pageSize, null);
        setDataProvince(response?.data);
    }
    useEffect(() => {
        getAllProvince(pageDetails.pageNum, pageDetails.pageSize);
    }, [pageDetails]);

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
            field: "action"
        }
    ];

    return (
        <>
            <ContentHeader label="Tỉnh thành" scr="Danh sách tỉnh thành"></ContentHeader>
            <Table header={tableHeader} data={dataProvince.pageData} paging={pageDetails} />
            <Pagination
                currentPage={pageDetails.pageNum}
                totalItem={dataProvince.total}
                itemPerPage={10}
                onChangePage={(page, size) => {
                    if (pageDetails.pageNum !== page || pageDetails.pageSize !== size) {
                        setPageDetails({ pageNum: page, pageSize: size });
                    }
                }}
            />
        </>
    )
}
