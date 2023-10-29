import listingTwo from "../../../public/PortfolioDisplay/listing-2.svg";
import Image from "next/image";
import { BsBarChartFill } from "react-icons/bs";
import InvestPopup from "./InvestPopup";

export default function CompanyInfo() {
  const companyInfoArray = [
    { name: "Stock Owned", val: 50 },
    { name: "Invested", val: "$1000" },
    { name: "Shares Valuation", val: "$2000" },
    { name: "Stock Price", val: "$40" },
    { name: "Latest Position", val: "+0.5" },
  ];
  return (
    <div className="relative xl:w-[28vw] bg-white p-[16px] rounded-[10px]">
      <div className="text-[32px] flex items-center  gap-x-[20px]">
        <Image
          src={listingTwo.src}
          width={92}
          height={92}
          alt="bolt company icon"
        ></Image>
        Bolt
      </div>
      <div className="flex flex-col gap-y-[25px] mt-[21px]">
        {companyInfoArray.map((item, index) => {
          return (
            <div
              className="font-robotoCon w-fit p-[10px] rounded-[10px] bg-darkerHomeGray"
              key={index}
            >
              {item.name} : {item.val}
            </div>
          );
        })}
      </div>
      <div className="absolute xl:bottom-[2px] xl:-right-[40px] sm:bottom-[10px] sm:left-[10px] bottom-[10px] left-0">
        <InvestPopup></InvestPopup>
      </div>
      <button className="p-[10px] gap-x-[10px] flex items-center rounded-[10px] bg-black text-white mt-[41px]">
        Invest{" "}
        <BsBarChartFill
          className="fill-primaryPurple"
          size={24}
        ></BsBarChartFill>
      </button>
    </div>
  );
}
