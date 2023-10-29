"use client";
import CompanyInfo from "../components/SharesPage/CompanyInfo";
import CandleStickGraph from "../components/SharesPage/CandleStickGraph";
import Apex from "../components/SharesPage/ApexCandleStick";
export default function SharesPage() {
  return (
    <div className="xl:px-[30px] overflow-x-hidden xl:py-[31px] px-[15px] py-[31px] flex gap-[15px] flex-col xl:flex-row">
      <CompanyInfo></CompanyInfo>
      <div className="xl:w-[43vw] w-full bg-[#EBEBEB] h-fit rounded-[10px] p-[10px]">
        {" "}
        <Apex></Apex>
      </div>
    </div>
  );
}
