import { BsFolderFill } from "react-icons/bs";

export default function PortfolioList() {
  const portfolioList = [
    { name: "make me a billionaire" },
    { name: "Kemi's college" },
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
            <div key={index} className="bg-darkerHomeGray rounded-[12px]">
              <div className="bg-black text-white gap-x-[10px] px-[7px] py-[6px] rounded-t-[12px] text-[14px]">
                {item.name}
              </div>
              <div className="flex relative pt-[14px] pb-[9px] font-robotoCon p-[6px] text-[12px] gap-x-[10px]">
                <div className="bg-portDarkGray py-[8px] px-[6px] rounded-[10px]">
                  invested: $12,000
                </div>
                <div className="bg-portDarkGray py-[8px] px-[6px] rounded-[10px]">
                  valuation: $15,000
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
