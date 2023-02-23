import React from "react";
import Avatar from "@mui/material/Avatar";
import faiz from "../../../assets/images/faiz.jpeg";

const CardMember = () => {
  return (
    <div className="h-32 w-full rounded-2xl bg-primary-gradient relative">
      <Avatar alt="Remy Sharp" src={faiz} sx={{ position: "absolute", top: "1rem", left: "1rem", width: "3.2rem", height: "3.2rem" }} />
      <p className="text-white text-xs absolute bottom-8 left-5">Location</p>
      <p className="text-white text-md font-bold absolute bottom-3 left-5">Kantor Sahid</p>
      <p className="text-white text-md font-bold absolute top-3 left-20">Tabay</p>
      <i className="text-white text-sm absolute top-8 left-20">UI/UX Designer</i>
      <i className="text-white text-sm absolute top-3 right-5">Member Since</i>
      <p className="text-white text-md font-bold absolute top-8 right-5">01 Juni 2021</p>
      <i className="text-white text-sm absolute bottom-3 right-5">ICO</i>
    </div>
  );
};

export default CardMember;
