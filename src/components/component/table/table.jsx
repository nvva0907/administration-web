import {PencilIcon} from "@heroicons/react/20/solid";
import {
    ArrowDownTrayIcon, ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import {
    Card, CardHeader, Typography, Button, CardBody, CardFooter, IconButton, Tooltip,
} from "@material-tailwind/react";
import InputText from "../form/input-text.jsx";
import Status from "../form/status.jsx";


export default function Table(props) {
    return (<Card className="h-full w-full flex">


        <CardHeader floated={false} shadow={false}>
            <div className="flex w-full justify-between h-20 bg-light-gray-1">
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
            <table className="w-full min-w-max table-auto text-left overflow-scroll">
                <thead>
                <tr>
                    {props.header.map((head, index) => (
                        <th key={index} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head.label}
                            </Typography>
                        </th>))}
                </tr>
                </thead>

                <tbody>
                {props.data.map((record, recordIndex) => (
                    <tr key={recordIndex}>
                        {props.header.map((head, headerIndex) => (
                            <td className="p-2 border-b border-blue-gray-50 flex-row text-start" key={headerIndex}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {
                                        (() => {
                                            if (head.field) {
                                                if (head.field === "key") {
                                                    return recordIndex + 1;
                                                }
                                                if (head.field === "status") {
                                                    if (record[head.field]) {
                                                        return <Status status={record[head.field]}></Status>
                                                    } else {
                                                        return '';
                                                    }
                                                } else if (head.field === "") {
                                                    return '';
                                                } else {
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
                        <td className="p-2 border-b border-blue-gray-50">
                            <Tooltip content="Edit User">
                                <IconButton variant="text">
                                    <PencilIcon className="h-4 w-4"/>
                                </IconButton>
                            </Tooltip>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">
                Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton variant="outlined" size="sm">
                    1
                </IconButton>
                <IconButton variant="text" size="sm">
                    2
                </IconButton>
                <IconButton variant="text" size="sm">
                    3
                </IconButton>
                <IconButton variant="text" size="sm">
                    ...
                </IconButton>
                <IconButton variant="text" size="sm">
                    8
                </IconButton>
                <IconButton variant="text" size="sm">
                    9
                </IconButton>
                <IconButton variant="text" size="sm">
                    10
                </IconButton>
            </div>
            <Button variant="outlined" size="sm">
                Next
            </Button>
        </CardFooter>
    </Card>)
}
