import {
    PencilSquareIcon, ArrowDownTrayIcon, ArrowUpTrayIcon
} from "@heroicons/react/20/solid";
import {
    Card, CardHeader, Typography, CardBody, IconButton,
} from "@material-tailwind/react";
import InputText from "../form/input-text.jsx";
import Status from "../form/status.jsx";
import Pagination from "./pagination.jsx";


export default function Table({header = [], data = [], paging ={}}) {

    return (
        <div className="flex color-blue font-medium w-full h-full justify-center items-center">
            <Card className="h-full w-full flex pl-3 pr-3 overflow-y-auto">
                <CardHeader floated={false} shadow={false}>
                    <div className="flex w-full justify-between h-20">
                        <div className="w-4/5 pl-5">
                            <InputText></InputText>
                        </div>
                        <div className="flex justify-end w-1/5  items-center gap-4 text-sm pr-5">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <ArrowUpTrayIcon strokeWidth={2} className="h-4 w-4"/>
                                <b>Upload</b>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4"/>
                                <b>Export</b>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardBody>
                    <table className="w-full min-w-max table-auto text-left bg-white">
                        <thead>
                        <tr>
                            {header.map((head, index) => (
                                <th key={index}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pl-0 bg-light-gray border-bottom-table">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-extrabold opacity-80"
                                    >
                                        {head?.label}
                                    </Typography>
                                </th>))}
                        </tr>
                        </thead>

                        <tbody>
                        {data.map((record, recordIndex) => (
                            <tr className="border-bottom-table" key={recordIndex}>
                                {header.map((head, headerIndex) => (
                                    <td className="p-1 border-b border-blue-gray-50 flex-row text-start pl-0"
                                        key={headerIndex}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {
                                                (() => {
                                                    if (head?.field) {
                                                        if (head?.field === "key") {
                                                            return paging.pageSize * (paging.pageNum - 1) + recordIndex + 1;
                                                        }
                                                        if (head?.field === "status") {
                                                            if (record[head.field]) {
                                                                return <Status status={record[head.field]}></Status>
                                                            } else {
                                                                return <Status status={0}></Status>
                                                            }
                                                        } else if (head.field === "action") {
                                                            return <IconButton variant="text">
                                                                <PencilSquareIcon className="h-4 w-4"/>
                                                            </IconButton>;
                                                        } else {
                                                            if(head.type === "object"){
                                                                if(record[head.objField] != null) {
                                                                    if(record[head.objField][head.field] != null) {
                                                                        return record[head.objField][head.field]
                                                                    }
                                                                }
                                                            }
                                                            return record[head.field] || '';
                                                        }
                                                    } else {
                                                        return '';
                                                    }
                                                })()
                                            }
                                        </Typography>
                                    </td>

                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>)
}
