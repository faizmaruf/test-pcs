import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <div className="w-sceen h-16 mx-1 my-3 relative">
      <NotificationsNoneIcon sx={{ position: "absolute", top: "0rem", right: "0rem", width: "2rem", height: "2rem", fontWeight: "bold" }} />
      <h1 className="text-lg text-primary font-bold absolute">Kerja Yuk!</h1>
      <h1 className="text-sm absolute bottom-0">Hi, Good Morning!</h1>
    </div>
  );
};

export default Header;
