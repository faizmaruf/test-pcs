import React from "react";
import Avatar from "@mui/material/Avatar";

const News = () => {
  return (
    <div>
      <p className="px-1 font-bold ">PCS New</p>
      <div className="w-sceen h-36 rounded-2xl mx-1 my-3 relative shadow-xl border">
        <Avatar alt="A Na" src="test" sx={{ position: "absolute", top: "1rem", left: "1.3rem", width: "2rem", height: "2rem" }} />
        <p className="text-primary text-md font-bold absolute top-4 left-16">Ana Riswati</p>
        <p className=" text-sm absolute top-3 right-5">Senin</p>
        <p className=" text-sm absolute top-7 right-5">30 Mei 2022</p>
        <div className="absolute top-14 h-1/2 px-0 w-full flex">
          <ul className="text-sm font-base leading-4 mx-auto">
            <li>Kalimat 1 - Lorem ipsum dolor sit amet consec</li>
            <li>Kalimat 2 - Lorem ipsum dolor sit amet consec</li>
            <li>Kalimat 3 - Lorem ipsum dolor sit amet consec</li>
            <li>Kalimat 4 - Lorem ipsum dolor sit amet consec</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
// untuk react carousel material ui nya sedikit bermasalah
