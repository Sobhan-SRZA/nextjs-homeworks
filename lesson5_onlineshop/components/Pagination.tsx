"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

interface PaginationProbs {
    pageCount: number;
}

export default function Pagination({ pageCount }: PaginationProbs) {
    const router = useRouter();
    const params = useSearchParams();

    const handlePageClick = (selectedItem: {
        selected: number;
    }) => {
        const page = selectedItem.selected + 1;
        const currentParams = new URLSearchParams(params.toString());

        currentParams.set("page", `${page}`);
        currentParams.set("per_page", `${5}`);
        router.push("/store?" + currentParams.toString());
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