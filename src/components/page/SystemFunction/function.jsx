import {ContentHeader} from "../../component/content-header/content-header.jsx";
import {useEffect, useState} from "react";
import Table from "../../component/table/table.jsx";
import Pagination from "../../component/table/pagination.jsx";
import {getListFunction} from "./function-api.jsx";

export default function Function() {
    const [dataFunction, setDataFunction] = useState([]);
    const [pageDetails, setPageDetails] = useState({
        pageNum: 1,
        pageSize: 10
    });
    const getAllFunction = async (pageNum, pageSize) => {
        const response = await getListFunction();
        setDataFunction(response?.data);
    }
    useEffect(() => {
        getAllFunction();
    }, [pageDetails]);

    const tableHeader = [
        {
            label: "STT",
            field: "key",

        },
        {
            label: "Mã chức năng",
            field: "moduleCode"
        },
        {
            label: "Tên chức năng",
            field: "moduleName"
        },
        {
            label: "",
            field: "action"
        }
    ];

    return (
        <>
            <ContentHeader label="Chức năng hệ thống" scr="Danh sách chức năng hệ thống"></ContentHeader>
            <Table header={tableHeader} data={dataFunction} paging={pageDetails} />
            {dataFunction.pageData && <Pagination
                currentPage={pageDetails.pageNum}
                totalItem={dataFunction.total}
                itemPerPage={10}
                onChangePage={(page, size) => {
                    if (pageDetails.pageNum !== page || pageDetails.pageSize !== size) {
                        setPageDetails({ pageNum: page, pageSize: size });
                    }
                }}
            />
            }
        </>
    )
}
