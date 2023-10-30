"use client";
import { BsPersonFill } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import userPotrait from "../../../public/CreditPage/user-image.jpg";
import Image from "next/image";
import { BsInfoCircle, BsX } from "react-icons/bs";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MainContext, MainContextTypes } from "../MainContext/MainContext";

const SmartScore = () => {
  const data = {
    datasets: [
      {
        label: "Smart Score",
        data: [75, 25],
        backgroundColor: [
          "rgba(168, 76, 241, 0.8)",
          "rgba(0, 0, 0, 1)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(168, 76, 241, 0.7)",
          "rgba(0, 0, 0, 1)",
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

export default function MainInfo() {
  const {
    incomingCollateralRequest,
    setIncomingCollateralRequest,
    mainPayload,
    walletAmount,
    overdraftCredit,
    setOverDraftCredit,
  } = useContext(MainContext) as MainContextTypes;
  const overDraftDataArray = [
    { name: "Credit Limit Overdraft", val: 250000 },
    { name: "Outstanding Credit", val: overdraftCredit, red: true },
  ];
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-col gap-y-[40px] relative">
      <ToastContainer></ToastContainer>
      {incomingCollateralRequest && (
        <div className="lg:w-[60vw] w-full pt-[40px] h-[80vh] overflow-auto shadow-lg p-[20px] bg-white fixed z-30 top-[30px] lg:top-[100px] p-[20px] rounded-[16px]">
          <div className="absolute top-0 relative w-full flex items-center pb-[10px] border-b border-black">
            <div>OverDraft Analysis Menu</div>
            <button
              onClick={() => {
                setIncomingCollateralRequest(false);
              }}
              className="absolute hover:bg-red-700 duration-300 right-0 bottom-[4px] px-[7px] text-white flex w-fit items-center rounded-[10px] bg-red-500"
            >
              <p className=" p-[5px]">Close</p>
              <BsX className="fill-white w-[24px]"></BsX>
            </button>
          </div>
          <div className="flex justify-between gap-x-[10px] lg:gap-x-0 lg:flex-row flex-col gap-y-[10px] lg:gap-y-0 pt-[20px]">
            <div className="font-robotoCon text-[20px] lg:text-[40px] p-[20px] relative bg-black  rounded-[10px] lg:w-fit text-white">
              <div className=" text-base text-white top-[10px] font-poppins">
                Shares Total Price
              </div>
              N{mainPayload.amount}
            </div>
            <div className="font-robotoCon text-[20px] relative lg:text-[40px] p-[20px]  bg-black  rounded-[10px] lg:w-fit text-statusGreen">
              <div className=" text-base text-white top-[10px] font-poppins">
                Overdraft Amount
              </div>
              <div className="text-[13px] text-white">
                N{mainPayload.amount} - N{walletAmount} (wallet balance) =
              </div>
              N{mainPayload.amount - walletAmount}
            </div>
          </div>
          <div className="flex justify-between mt-[10px] lg:mt-[20px] lg:flex-row flex-col gap-y-[10px] lg:gap-y-0">
            <div className="font-robotoCon lg:text-[40px] p-[20px]  bg-black  rounded-[10px] lg:w-fit text-white relative">
              <div className="text-base text-white top-[10px] font-poppins">
                Credit Amount
              </div>
              N{Math.round(((mainPayload.amount - walletAmount) * 105) / 100)}
            </div>
            <div className="font-robotoCon lg:text-[40px] p-[20px]  bg-black  rounded-[10px] lg:w-fit text-white relative">
              <div className="text-base text-white top-[10px] font-poppins">
                Interest Rate
              </div>
              {"5%"}
            </div>
          </div>
          <div className="flex justify-between  lg:flex-row flex-col">
            <div className="lg:w-fit w-full flex flex-col items-center">
              <div className="text-black text-center mt-[20px] bg-darkerHomeGray rounded-full p-[10px] ">
                Smart Score
              </div>
              <div className="w-[200px] rounded-[16px] relative flex items-center justify-center flex-col ">
                <div className="text-black absolute font-robotoCon text-[24px] leading-none  mt-[2px]">
                  75%
                </div>
                <SmartScore></SmartScore>
              </div>
            </div>
            <div className="flex flex-col pt-[20px] gap-y-[10px]">
              <div className="p-[7px] rounded-[10px] bg-darkerHomeGray">
                <div> Overdraft Credit Limit: </div>
                <div className="font-robotoCon">N500,000</div>
              </div>
              <div className="bg-darkerHomeGray p-[7px] rounded-[10px]">
                <div>Minimum Monthly Installment:</div>
                <div className="font-robotoCon ">
                  {" "}
                  N{Math.round((mainPayload.amount - walletAmount) / 11)}
                </div>
              </div>
              <div>
                {mainPayload.amount - walletAmount > 500000 ? (
                  <div className="text-statusRed mt-[40px] flex gap-x-[10px] items-center">
                    {" "}
                    <div className="">
                      <BsInfoCircle
                        fill=""
                        className="fill-statusRed"
                      ></BsInfoCircle>
                    </div>{" "}
                    The Overdraft exceeds your overdraft Credit limit
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      toast.success("Transaction Succesful");
                      setIncomingCollateralRequest(false);
                      setOverDraftCredit((prev: any) => {
                        return prev + mainPayload.amount - walletAmount;
                      });
                    }}
                    className="bg-primaryPurple mt-[40px] w-full text-white p-[20px] text-white rounded-[14px] hover:bg-black duration-300"
                  >
                    Confirm Overdraft
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="mb-[17px]">User Info</div>
        <div className="flex gap-x-[32px] lg:flex-row flex-col">
          <div className="bg-white flex p-[15px] rounded-[16px] gap-x-[30px] ">
            <div className=" rounded-[16px] border w-[120px] h-[120px] overflow-hidden">
              <Image
                src={userPotrait.src}
                width={94}
                height={94}
                unoptimized
                className=" rounded-[16px] object-top scale-[1.6]"
                alt="user image "
              ></Image>
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <div>Name: Tunde</div>
              <div>Age: 32</div>
              <div>Location: Phase Iv, Abuja</div>
            </div>
          </div>
          <div className=" p-[20px] py-[25px] rounded-[16px] border-[5px] border-homeDarkerGray bg-black flex items-center justify-center relative">
            <div className="absolute text-center flex text-white top-[5px] lg:top-[20px]">
              smart score
            </div>
            <div className="font-robotoCon text-primaryPurple text-[64px] leading-none">
              75.5%
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-[17px]"> Portfolios</div>

        <div className="bg-white rounded-[16px]">
          {" "}
          <div className="p-[24px]  gap-y-[20px] flex flex-col">
            <div className="bg-darkerHomeGray p-[7px]  px-[14px] lg:flex-row flex gap-y-[10px] lg:gap-y-0 flex-col lg:items-center rounded-[10px]">
              <div className="lg:w-[150px] truncate lg:pr-[20px] border-b lg:border-r lg:border-b-0 border-[#999999]">
                Kemi&apos;s college
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:pl-[33px] lg:gap-x-[33px] font-robotoCon gap-y-[10px] lg:gap-y-0">
                <div className="rounded-[10px] bg-black text-white p-[10px] w-fit">
                  Invested: N3,000, 000
                </div>
                <div className="rounded-[10px] bg-black text-white p-[10px] w-fit">
                  Portfolio Valuation: N3,800,000
                </div>
              </div>
            </div>
            <div className="bg-darkerHomeGray p-[7px]  px-[14px] lg:flex-row flex gap-y-[10px] lg:gap-y-0 flex-col lg:items-center rounded-[10px]">
              <div className="lg:w-[150px] truncate lg:pr-[20px] border-b lg:border-r lg:border-b-0 border-[#999999]">
                Make me a billionaire
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:pl-[33px] lg:gap-x-[33px] font-robotoCon gap-y-[10px] lg:gap-y-0">
                <div className="rounded-[10px] bg-black text-white p-[10px] w-fit">
                  Invested: N1,200, 000
                </div>
                <div className="rounded-[10px] bg-black text-white p-[10px] w-fit">
                  Portfolio Valuation: N1,300,000
                </div>
              </div>
            </div>
          </div>
          <div className="p-[24px] border-t border-black flex justify-end  font-robotoCon gap-x-[15px]">
            <div className="py-[15px] px-[24px] rounded-[10px] bg-statusGreen text-white h-fit">
              Total Valuation: N5,100,000{" "}
            </div>
            <div className="py-[15px] px-[24px] rounded-[10px] bg-black text-white h-fit">
              Total Invested: N4,200,000{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[17px]">Overdraft</div>
        <div className="flex gap-x-[18px] p-[20px] bg-white rounded-[16px] lg:flex-row flex-col lg:gap-y-0 gap-y-[20px]">
          {overDraftDataArray.map((item, index) => {
            return (
              <div
                key={index}
                className="px-[20px] bg-black relative pb-[35px] pt-[40px] rounded-[16px] border-[5px] border-[#EBEBEB]"
              >
                <div className="text-white left-[20px] top-[19px] absolute text-[14px]">
                  {item.name}
                </div>
                <div
                  className={`${
                    item.red ? "text-statusRed" : "text-white"
                  } text-[64px]  font-robotoCon`}
                >
                  {item.red ? "-" : ""}N{item.val}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
