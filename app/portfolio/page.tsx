import StockOwned from "../components/Portfolio/StockedOwned";
import PortfolioInfo from "../components/Portfolio/PortfolioInfo";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div className="xl:px-[30px] xl:py-[31px] px-[15px] py-[31px] ">
      <div className="mb-[30px]">
        <button className="text-white bg-black flex items-center w-fit gap-x-[10px] p-[10px] rounded-[10px]">
          {" "}
          Buy Shares
          <BsPlusCircleFill
            className="fill-primaryPurple"
            size={24}
          ></BsPlusCircleFill>
        </button>
      </div>
      <div className="flex lg:flex-row flex-col-reverse pb-[60px]">
        <StockOwned></StockOwned>
        <PortfolioInfo></PortfolioInfo>
      </div>
    </div>
  );
}
