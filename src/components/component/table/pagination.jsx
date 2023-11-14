import ReactPaginate from "react-paginate";
import "./table.css"

export default function Pagination({currentPage, itemPerPage, totalItem, onChangePage, totalPage}) {
    if (currentPage > 1 && (totalItem === 0 || (Math.floor(totalItem / itemPerPage) + (totalItem % itemPerPage === 0 ? 0 : 1)) < currentPage)) {
        onChangePage(1, itemPerPage);
        return <div></div>;
    }
    return (
        <div className="flex justify-between items-center row-span-1 pl-5 pr-5">
            <div>
                <p className="text-sm text-gray-700">
                    Hiển thị {itemPerPage * (currentPage - 1) + 1}-{((itemPerPage * (currentPage - 1) + itemPerPage) > totalItem) ? totalItem : (itemPerPage * (currentPage - 1) + itemPerPage)} trong tổng số {totalItem} bản ghi
                </p>
            </div>
            <div className="rounded text-blue-950 border-solid-1px text-sm">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={(ev) => {
                        onChangePage(ev.selected + 1, itemPerPage);
                    }}
                    forcePage={currentPage - 1}
                    pageCount={Math.ceil(totalItem / itemPerPage)}
                    previousLabel="Previous"
                    containerClassName="flex justify-center items-center"
                    // pageClassName=""
                    pageLinkClassName="w-9 h-9 text-center flex justify-center items-center border-r-solid-1px"
                    // previousClassName=""
                    previousLinkClassName="flex justify-center items-center p-2 border-r-solid-1px"
                    // nextClassName=""
                    nextLinkClassName="flex justify-center items-center p-2"
                    activeClassName="bg-blue text-white"
                    breakLinkClassName="w-9 h-9 text-center flex justify-center items-center border-r-solid-1px"
                    hrefBuilder={(page, pageCount, selected) =>
                        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                    }
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}
