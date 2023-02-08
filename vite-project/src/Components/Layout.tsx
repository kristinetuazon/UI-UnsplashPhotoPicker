import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import GalleryItems from "./GalleryItems";
import axios from "axios";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="m-3 w-[95%] h-[94%] grid grid-flow-col grid-cols-6">
      <div className="col-span-2 m-3">
        <Filters />
      </div>
      <div className="col-span-4">
        <div className="border-2 rounded-lg shadow-md overflow-scroll gap-3 bg-slate-200 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-4 w-[100%] h-full p-3">
          <GalleryItems />
        </div>
      </div>
    </div>
  );
};

export default Layout;
