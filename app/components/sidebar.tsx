import { BsHouseFill, BsFolderFill, BsPersonFill } from "react-icons/bs";

export default function SideBar() {
  const headerIconsProp = {
    color: "white",
    size: 21,
  };

  const headerIcons = [
    {
      name: "home",
      icon: (
        <BsHouseFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsHouseFill>
      ),
      selected: true,
    },
    {
      name: "portfolio",
      icon: (
        <BsFolderFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsFolderFill>
      ),
      selected: false,
    },
    {
      name: "credit info",
      icon: (
        <BsPersonFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsPersonFill>
      ),
      selected: false,
    },
  ];
  return (
    <div className="w-full">
      <div className="w-[60px] h-[60px] bg-white rounded-full mb-[20px] mt-[40px] mx-auto"></div>
      <div className="w-3/5 h-[1px] bg-headerTextGray mx-auto mb-[20px]"></div>
      <div className="px-[20px] flex flex-col gap-y-[30px]">
        {headerIcons.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-white flex items-center gap-x-[18px] rounded-[12px] px-[10px] ${
                item.selected ? "bg-headerGray" : ""
              }`}
            >
              <div className="py-[10px]">{item.icon} </div>{" "}
              <p className="capitalize text-headerTextGray">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
