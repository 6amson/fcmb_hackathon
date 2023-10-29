import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BsX } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);
import { BsWalletFill, BsCashStack } from "react-icons/bs";

const SmartScore = () => {
  const data = {
    datasets: [
      {
        label: "Smart Score",
        data: [33, 11],
        backgroundColor: [
          "rgba(168, 76, 241, 0.8)",
          "rgba(40, 40, 40, 0.8)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(168, 76, 241, 0.7)",
          "rgba(20, 20, 20, 0.7)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default function InvestPopup() {
  const [shareAmount, setShareAmount] = useState(0);
  const aboveWallet = shareAmount * 40 > 25000;
  const aboveAll = shareAmount * 40 > 25000 + 5000;
  return (
    <div className="bg-white py-[20px] rounded-[10px] border border-darkerHomeGray relative sm:w-fit w-[320px]">
      <button className="absolute right-0 top-0 p-[10px] rounded-bl-[10px] rounded-tr-[10px] bg-red-500">
        <BsX className="fill-white"></BsX>
      </button>
      <div className="absolute top-[30px] right-[10px]"> </div>

      <div className="flex flex-col gap-y-[25px] p-[10px] lg:text-base text-[12px]">
        <div className="flex items-center gap-x-[17px]">
          Shares Qty{" "}
          <input
            type="number"
            onChange={(e: any) => {
              setShareAmount(e.target.value);
            }}
            className="w-[100px] bg-darkerHomeGray rounded-[10px] h-[40px] p-[10px] font-robotoCon"
          ></input>{" "}
        </div>
        <div className="flex items-center gap-x-[17px]">
          Shares Price{" "}
          <div className="w-[100px] bg-darkerHomeGray rounded-[10px] h-[40px] p-[10px] font-robotoCon">
            $40
          </div>{" "}
        </div>
      </div>
      <div className="flex items-center gap-x-[20px]  text-white mt-[14px] p-[10px] lg:text-base text-[12px]">
        <button
          disabled={aboveWallet}
          className={`${
            aboveWallet
              ? "bg-black text-[#AAAAAA]"
              : "bg-primaryPurple text-white"
          } p-[10px] rounded-[10px] flex gap-x-[10px] w-fit  items-center`}
        >
          Buy Stock{" "}
          <BsWalletFill
            className={` ${aboveWallet ? "fill-[#AAAAAA]" : "fill-white"}`}
          ></BsWalletFill>
        </button>
        <button
          disabled={!aboveWallet}
          className={`${
            !aboveWallet
              ? "bg-black text-[#AAAAAA]"
              : "bg-primaryPurple text-white"
          } p-[10px] rounded-[10px] flex gap-x-[10px] w-fit  items-center`}
        >
          Overdraft{" "}
          <BsCashStack
            className={` ${!aboveWallet ? "fill-[#AAAAAA]" : "fill-white"}`}
          ></BsCashStack>
        </button>
      </div>
      <div className="flex lg:flex-row flex-col p-[20px] pb-[10px] border-t border-black gap-y-[20px] lg:gap-x-[20px] text-[12px] lg:text-[14px]">
        <div className="flex gap-x-[10px] items-center">
          Total Price{" "}
          <div className="bg-darkerHomeGray w-[110px] p-[10px] h-[40px] rounded-[10px] font-robotoCon">
            ${shareAmount * 40}
          </div>
        </div>
        <div className="flex gap-x-[10px] items-center">
          Wallet Balance
          <div className="bg-darkerHomeGray w-[110px] p-[10px] h-[40px] rounded-[10px] font-robotoCon">
            $25,000
          </div>
        </div>
      </div>
    </div>
  );
}
