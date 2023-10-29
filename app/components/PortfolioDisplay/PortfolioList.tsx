"use client";
import { BsFolderFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function PortfolioList() {
  const router = useRouter();
  const portfolioList = [
    {
      name: "make me a billionaire",
      in: "N1,200, 000",
      val: "N1,300,000",
      onclick: () => {
        router.push("portfolio?name=make me a billionaire");
      },
    },
    {
      name: "Kemi's college",
      in: "N3,000,000",
      val: "N3,800,000",
      onclick: () => {
        router.push("portfolio?name=Kemi's college");
      },
    },
  ];
  return (
    <div className="w-full xl:w-[31vw] bg-white h-fit">
      <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
        {" "}
        <BsFolderFill
          size={24}
          fill="white"
          className="w-[24px]"
        ></BsFolderFill>
        <p>Portfolio</p>
      </div>
      <div className="lg:p-[10px] xl:p-[21px] pt-[21px] flex flex-col gap-y-[15px] p-[10px]">
        {" "}
        {portfolioList.map((item, index) => {
          return (
            <button
              onClick={() => {
                item.onclick();
              }}
              key={index}
              className="bg-darkerHomeGray rounded-[12px]"
            >
              <div className="bg-black text-white gap-x-[10px] px-[7px] py-[6px] rounded-t-[12px] text-[14px]">
                {item.name}
              </div>
              <div className="flex relative pt-[14px] pb-[9px] font-robotoCon p-[6px] text-[12px] gap-x-[10px]">
                <div className="bg-portDarkGray py-[8px] px-[6px] rounded-[10px]">
                  invested: {item.in}
                </div>
                <div className="bg-portDarkGray py-[8px] px-[6px] rounded-[10px]">
                  valuation: {item.val}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
