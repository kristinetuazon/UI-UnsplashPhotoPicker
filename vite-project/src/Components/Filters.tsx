import React from "react";
import { useState, useContext } from "react";
import IconOne from "/search2-svgrepo-com.svg";
import IconTwo from "/search-normal-1-svgrepo-com.svg";
import axios from "axios";
import BoxContext from "./BoxContext";

type Props = {};

const Filters = (props: Props) => {
let contextValue = useContext(BoxContext);
let {onSearch,
  value,
  setValue} = contextValue;



  return (
    <>
      {/* <h1 className="text-3xl tracking-wide text-gray-800 uppercase font-extrabold ">
        search
      </h1> */}
    <div className="flex flex-col items-center">

<div className="flex flex-row bg-gray-200 rounded-lg p-3 mt-5 w-[96%] border-gray-300 border-2 hover:drop-shadow-lg text-gray-800">
    <span><img src={IconTwo} className="w-5" /> 
    </span>
      <input
      placeholder="Search terms..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        className="w-[90%] h-[100%] ml-2 bg-gray-200"
      />

</div>

    <button onClick={()=>{onSearch(value)}} className="neumosmall border-2 border-gray-700 rounded-md bg-gray-300 mt-7 p-3 text-xl text-gray-800 hover:drop-shadow-lg uppercase font-bold"> search</button>
    </div>
    </>
  );
};

export default Filters;
