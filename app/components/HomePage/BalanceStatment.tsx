import { BsPlusCircleFill, BsArrowDown } from "react-icons/bs";
import { US, NG } from "country-flag-icons/react/3x2";
import Image from "next/image";
import stackedCoins from "../../../public/HomePage/stacked-coins.svg";

export default function BalanceStatement() {
  return (
    <div className="bg-black text-white relative w-full h-[180px] lg:w-[48vw] lg:h-[380px] rounded-[12px]">
      <div></div>
      <Image
        src={stackedCoins.src}
        width={290}
        height={100}
        alt="stacked coins illustration"
        className="w-[16vw] absolute right-0 bottom-0"
      ></Image>
      <div className="lg:text-[10vw] text-[18vw] text-white absolute lg:left-[40px] lg:bottom-[40px] left-[17px] bottom-[10px] leading-none font-robotoCon">
        25,000
      </div>
      <button className="lg:text-[1rem] text-[10px]  top-[16px] right-[10px] lg:top-[33px] lg:right-[22px] absolute flex gap-x-[4px] lg:gap-x-2 items-center">
        <BsPlusCircleFill
          className="lg:w-[24px] w-[12px]"
          size={24}
          fill={"#A84CF1"}
        ></BsPlusCircleFill>{" "}
        <p className="leading-none"> Wallet Balance</p>
      </button>
      <button className="absolute top-[12px] left-[11px] lg:left-[24px] lg:top-[24px] gap-x-[8px] text-white text-[14px] bg-primaryPurple rounded-[11px] flex py-[8px] px-[18px]">
        NGN
        <NG title="United States" className="w-[24px]" />
        <BsArrowDown size={18}></BsArrowDown>
      </button>
    </div>
  );
}
