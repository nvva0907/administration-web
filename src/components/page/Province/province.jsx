import {ContentHeader} from "../../component/content-header/content-header.jsx";
import Table from "../../component/table/table.jsx";

export default function Province() {
    return (
        <>
            <ContentHeader label="Tỉnh thành" scr="Danh sách tỉnh thành"></ContentHeader>
            <div className="m-body">
                <Table></Table>
            </div>
        </>
    )
}
