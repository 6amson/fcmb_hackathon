"use client";
import { Dispatch, SetStateAction, useState, useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { MainContext, MainContextTypes } from "../MainContext/MainContext";
import { Rings } from "react-loader-spinner";

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

interface InvestPopupProps {
  setIsPopUpOpen: Dispatch<SetStateAction<boolean>>;
}

export default function InvestPopup(props: InvestPopupProps) {
  const router = useRouter();
  const {
    incomingCollateralRequest,
    setIncomingCollateralRequest,
    mainPayload,
    setMainPayload,
    setWalletAmount,
    walletAmount,
  } = useContext(MainContext) as MainContextTypes;
  const [shareAmount, setShareAmount] = useState(0);
  const aboveWallet = shareAmount * 2000 > 250000;
  const aboveAll = shareAmount * 40 > 25000 + 5000;
  const [fireOrder, setFireOrder] = useState(false);
  const [isLoadingOrder, setIsLoadingOrder] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const handleBuyS = () => {
    setFireOrder(true);
    setIsLoadingOrder(true);
    setTimeout(() => {
      setFireOrder(false);
      setIsLoadingOrder(false);
      setIsResult(true);
    }, 2000);
  };
  const handleOverDraft = () => {
    setIncomingCollateralRequest(true);
    setMainPayload({ amount: shareAmount * 2000 });
    router.push("/creditPage");
  };
  return (
    <div className="bg-white py-[20px] rounded-[10px] border border-darkerHomeGray relative sm:w-fit w-[320px]">
      <button
        onClick={() => {
          props.setIsPopUpOpen(false);
        }}
        className="absolute hover:bg-red-700 duration-300 right-0 top-0 p-[10px] rounded-bl-[10px] rounded-tr-[10px] bg-red-500"
      >
        <BsX className="fill-white w-[24px]"></BsX>
      </button>
      <div className="absolute top-[30px] right-[10px]"> </div>

      <div className="flex flex-col gap-y-[15px] px-[20px] lg:text-base text-[12px]">
        <div className="flex items-center gap-x-[17px]">
          Shares Qty:{" "}
          <input
            type="number"
            onChange={(e: any) => {
              setIsResult(false);
              setShareAmount(e.target.value);
            }}
            className="w-[100px] bg-darkerHomeGray rounded-[10px] h-[40px] p-[10px] font-robotoCon text-center"
          ></input>{" "}
        </div>
        <div className="flex items-center gap-x-[17px]">
          Shares Price:{" "}
          <div className="w-fit px-[20px] bg-darkerHomeGray rounded-[10px] h-[40px] p-[10px] font-robotoCon text-center">
            N2000
          </div>{" "}
        </div>
      </div>
      <div className="flex items-center gap-x-[20px]  text-white mt-[14px] p-[10px] lg:text-base text-[12px]">
        <button
          disabled={aboveWallet}
          onClick={() => {
            handleBuyS();
          }}
          className={`${
            aboveWallet
              ? "bg-black text-[#AAAAAA]"
              : "bg-primaryPurple text-white"
          } p-[10px] rounded-[10px] flex gap-x-[10px] w-fit  items-center duration-300`}
        >
          Buy Stock{" "}
          <BsWalletFill
            className={` ${
              aboveWallet ? "fill-[#AAAAAA]" : "fill-white"
            } duration-300`}
          ></BsWalletFill>
        </button>
        <button
          onClick={() => {
            handleOverDraft();
          }}
          disabled={!aboveWallet}
          className={`${
            !aboveWallet
              ? "bg-black text-[#AAAAAA]"
              : "bg-primaryPurple text-white"
          } p-[10px] rounded-[10px] flex gap-x-[10px] w-fit  items-center duration-300`}
        >
          Overdraft{" "}
          <BsCashStack
            className={` ${
              !aboveWallet ? "fill-[#AAAAAA]" : "fill-white"
            } duration-300`}
          ></BsCashStack>
        </button>
        <div className={`${!fireOrder ? "hidden" : ""}`}>
          {isLoadingOrder && (
            <Rings
              height="40"
              width="40"
              color="#A84CF1"
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={isLoadingOrder}
              ariaLabel="rings-loading"
            />
          )}
        </div>
        {isResult && (
          <div
            className={`${
              fireOrder ? "hidden" : ""
            } font-robotoCon text-statusGreen`}
          >
            {!isLoadingOrder && " Transaction Succesful!"}
          </div>
        )}
      </div>
      <div className="flex lg:flex-row flex-col p-[20px] pb-[10px] border-t border-black gap-y-[10px] lg:gap-x-[10px] text-[12px] lg:text-[14px]">
        <div className="flex gap-x-[10px] items-center">
          <div className=" text-[14px] flex lg:w-[80px]"> Total Price </div>
          <div className="bg-darkerHomeGray w-[110px] p-[10px] h-[40px] rounded-[10px] font-robotoCon text-center">
            N{shareAmount * 2000}
          </div>
        </div>
        <div className="flex gap-x-[10px] items-center">
          <div className="text-[14px] lg:w-[120px]">Wallet Balance</div>
          <div
            className={`${
              !aboveWallet ? "bg-statusGreen" : "bg-statusRed"
            } w-[110px] p-[10px] h-[40px] rounded-[10px] font-robotoCon text-center relative duration-300 text-white`}
          >
            N{walletAmount}
          </div>
        </div>
      </div>
    </div>
  );
}
