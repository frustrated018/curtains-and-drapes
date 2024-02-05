"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";

const queries = [
  { name: "Trending", param: "trending-desc" },
  { name: "Latest Arrivals", param: "latest-desc" },
  { name: "Price: Low to high", param: "price-asc" },
  { name: "Price: High to low", param: "price-desc" },
];

const RightSearchLinks = ({ setSelectedQuery }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //   console.log("search params", searchParams);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Suspense fallback="Loading>>>>">
      <div className="flex flex-col p-4 md:p-0">
        {queries.map((query) => (
          <Link
            key={query.name}
            href={pathname + "?" + createQueryString("sort", query.param)}
            onClick={() => setSelectedQuery(query.name)}
            className={clsx("hover:underline", {
              "text-blue-600 underline": searchParams
                .toString()
                .includes(query.param),
            })}
          >
            {query.name}
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default RightSearchLinks;
