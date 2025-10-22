"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: query.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromUrlQuery({
          params: query.toString(),
          keysToRemove: ["topic"],
        });

        router.push(newUrl, { scroll: false });
      }

      // Cleanup the timeout when the component unmounts or dependencies change
      return () => clearTimeout(delayDebounceFn);
    }, 500);
  }, [query, router, searchQuery, pathname]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src={"/icons/search.svg"} alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
