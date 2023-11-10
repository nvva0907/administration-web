import ReactPaginate from "react-paginate";
import "./table.css"

export default function Pagination({currentPage, itemPerPage, totalItem, onChangePage}) {
    if (currentPage > 1 && (totalItem === 0 || (Math.floor(totalItem / itemPerPage) + (totalItem % itemPerPage === 0 ? 0 : 1)) < currentPage)) {
        onChangePage(1, itemPerPage);
        return <div></div>;
    }
    return (
        <div className="flex justify-between items-center p-2">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{currentPage}</span> to <span
                    className="font-medium">10</span> of{' '}
                    <span className="font-medium">{988}</span> results
                </p>
            </div>
            <div className="rounded bg-light-gray text-blue-950 p-2 border-solid-1px">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={(ev) => {
                        onChangePage(ev.selected + 1, itemPerPage);
                    }}
                    forcePage={currentPage - 1}
                    pageCount={Math.ceil(totalItem / itemPerPage)}
                    previousLabel="Previous"
                    containerClassName="flex gap-5"
                    pageClassName=""
                    pageLinkClassName=""
                    previousClassName=""
                    previousLinkClassName=""
                    nextClassName=""
                    nextLinkClassName=""
                    activeClassName=""
                    hrefBuilder={(page, pageCount, selected) =>
                        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                    }
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}
