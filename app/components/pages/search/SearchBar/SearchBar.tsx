import React, { useState, useEffect } from "react";
import Input from "../../../ui/Input";
import { useData } from "@/app/utils/store/useData";
import { searchRepos } from "@/app/utils/api/services";

const SearchBar = () => {
  const { setData, query, data } = useData();
  const [searchVal, setSearchVal] = useState<string>(
    typeof window !== 'undefined' && localStorage.getItem("searchVal") || ""
  );

  useEffect(() => {
    const searchGitHubRepos = async () => {
      if (searchVal.trim() !== "") {
        const d: any[] = await searchRepos(searchVal, query);
        setData(d);
      }
    };

    searchGitHubRepos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal, query]);

  // Save searchVal to localStorage whenever it changes
  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem("searchVal", searchVal);
  }, [searchVal]);

  return (
    <div className="flex gap-6 bg-slate-100 items-center justify-center border border-[1px solid black] py-6 px-6 rounded-lg">
      <Input
        placeholder="Search repo..."
        value={searchVal}
        className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchVal(e.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;
