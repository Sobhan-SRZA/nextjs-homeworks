"use client";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

interface PaginationProbs {
    pageCount: number;
}

export default function Pagination({ pageCount }: PaginationProbs) {
    const router = useRouter();

    const handlePageClick = (selectedItem: {
        selected: number;
    }) => {
        const page = selectedItem.selected + 1;

        router.push(`/store?page=${page}&per_page=${5}`)
    };

    return (
        <div>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                breakLabel={"..."}
                nextLabel={"بعدی >"}
                previousLabel={"< قبلی"}
                onPageChange={handlePageClick}
                renderOnZeroPageCount={null}
                className="flex gap-4 rtl justify-center mt-8"
                disabledClassName="text-gray-600 cursor-not-allowed"
                activeLinkClassName="text-red-600"
                pageClassName="cursor-pointer"
            />
        </div>
    )
}