import { BsPlusCircleFill, BsArrowDown } from "react-icons/bs";
import { US, NG } from "country-flag-icons/react/3x2";
import Image from "next/image";
import stackedCoins from "../../../public/HomePage/stacked-coins.svg";

export default function BalanceStatement() {
  return (
    <div className="bg-black text-white relative w-[48vw] h-[380px] rounded-[12px]">
      <div></div>
      <Image
        src={stackedCoins.src}
        width={290}
        height={100}
        alt="stacked coins illustration"
        className="w-[16vw] absolute right-0 bottom-0"
      ></Image>
      <div className="text-[10vw] text-white absolute left-[40px] bottom-[40px] leading-none">
        25,000
      </div>
      <button className="text-[1rem] top-[33px] right-[22px] absolute flex gap-x-2 items-center">
        <BsPlusCircleFill size={24} fill={"#A84CF1"}></BsPlusCircleFill> Wallet
        Balance
      </button>
      <button className="absolute left-[24px] top-[24px] gap-x-[8px] text-white text-[14px] bg-primaryPurple rounded-[11px] flex py-[8px] px-[18px]">
        NGN
        <NG title="United States" className="w-[24px]" />
        <BsArrowDown size={18}></BsArrowDown>
      </button>
    </div>
  );
}
