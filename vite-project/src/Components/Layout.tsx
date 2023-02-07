import React from "react";
import Filters from "./Filters";
import GalleryItems from "./GalleryItems";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="m-3 w-[95%] h-[94%] grid grid-flow-col grid-cols-6">
      <div className="col-span-2 m-3">
        <Filters />
      </div>
      <div className="col-span-4">
        <div className="neumosmall grid-cols-4 w-[100%] h-full p-3">
        <GalleryItems/>

        </div>
      </div>
    </div>
  );
};

export default Layout;
