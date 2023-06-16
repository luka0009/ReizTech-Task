import React from "react";
import { SortComponentProps, SortType } from "../types";

const Sort = ({ setSortValue }: SortComponentProps) => {
  return (
    <div>
      <select
        className="p-2 px-4 rounded-md bg-[lawngreen]"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSortValue(e.target.value as SortType)
        }
      >
        <option value="Name ascending">Name ascending</option>
        <option value="Name descending">Name descending</option>
      </select>
    </div>
  );
};

export default Sort;
