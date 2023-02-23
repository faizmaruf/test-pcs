import React from "react";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import UpdateIcon from "@mui/icons-material/Update";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Activity = () => {
  return (
    <div className="w-sceen h-36 mx-1 my-3 relative ">
      <p className=" font-bold ">Today's activity</p>
      <div className="w-full h-full flex justify-between text-center ">
        <div className="flex w-full flex-col ">
          <MoreTimeIcon sx={{ margin: "0.7rem auto", width: "3.2rem", height: "3.2rem" }} />
          <h2 className="font-extrabold">08:30</h2>
          <p className="text-sm">Check In</p>
        </div>
        <div className="flex w-full flex-col">
          <UpdateIcon sx={{ margin: "0.7rem auto", width: "3.2rem", height: "3.2rem", color: "#F02823" }} />
          <h2 className="font-extrabold text-primary">03:00:00</h2>
          <p className="text-sm">Working Hours</p>
        </div>
        <div className="flex w-full flex-col">
          <ScheduleIcon sx={{ margin: "0.7rem auto", width: "3.2rem", height: "3.2rem", color: "#F02823" }} />
          <h2 className="font-extrabold ">--:--</h2>
          <p className="text-sm">Check Out</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
