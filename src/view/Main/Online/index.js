import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
let people = [
  {
    name: "Jefril",
    workLocation: "Sahid",
  },
  {
    name: "Zasami",
    workLocation: "BSD",
  },
  {
    name: "Sam",
    workLocation: "Sahid",
  },
  {
    name: "Aldo",
    workLocation: "Sahid",
  },
  {
    name: "Erwin",
    workLocation: "Sahid",
  },
  {
    name: "Arye",
    workLocation: "BSD",
  },
  {
    name: "Risya",
    workLocation: "BSD",
  },
  {
    name: "Nesha",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
  {
    name: "Uknown",
    workLocation: "WFH",
  },
];

const Online = () => {
  return (
    <div>
      <p className="px-1 font-bold ">Online</p>
      <div className="w-sceen h-24 rounded-2xl mx-1 my-3 relative shadow-xl border flex">
        <AvatarGroup max={9} style={{ margin: "0 auto" }}>
          {people.map((person, i) => (
            <div className="relative">
              <Avatar key={i} alt={person.name} src="/broken-image.jpg" />
              <h2 className="absolute left-0 right-0 mx-auto w-full text-xs font-bold text-center">{person.name}</h2>
              <p className="absolute left-0 right-0 top-16 text-[10px] mx-auto text-center">{person.workLocation}</p>
            </div>
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
};

export default Online;
