"use client";
import listingOne from "../../../public/PortfolioDisplay/listing-1.svg";
import listingTwo from "../../../public/PortfolioDisplay/listing-2.svg";
import listingThree from "../../../public/PortfolioDisplay/listing-3.svg";
import listingFour from "../../../public/PortfolioDisplay/listing-4.svg";

import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { BsBarChartFill } from "react-icons/bs";
import InvestPopup from "./InvestPopup";
import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MainContext, MainContextTypes } from "../MainContext/MainContext";

export default function CompanyInfo() {
  const paramss = useSearchParams();
  const {
    incomingCollateralRequest,
    setIncomingCollateralRequest,
    mainPayload,
    walletAmount,
    overdraftCredit,
    setOverDraftCredit,
    setSharesData,
    sharesData,
  } = useContext(MainContext) as MainContextTypes;
  const listingArray = [
    {
      name: "Nestle",
      icon: listingOne,
      up: true,
      percent: "+0.6%",
      owned: sharesData.nestle.stockOwned,
      namee: "nestle",
    },
    {
      name: "Bolt",
      icon: listingTwo,
      up: false,
      percent: "-0.3%",
      owned: sharesData.Bolt.stockOwned,
      namee: "bolt",
    },
    {
      name: "flutterwave",
      icon: listingThree,
      up: true,
      percent: "+0.9%",
      namee: "flutter",
      owned: 40,
    },
    {
      name: "Alat",
      icon: listingFour,
      up: false,
      percent: "-0.2%",
      namee: "alat",
      owned: 40,
    },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const companyInfoArray = [
    { name: "Invested", val: "N200,000" },
    { name: "Shares Valuation", val: "N260,000" },
    { name: "Share Price", val: "N2000" },
    { name: "Latest Position", val: "+0.5" },
  ];
  const finalName = listingArray.filter((item) => {
    if (item.namee === paramss.get("name")) {
      return item.name;
    }
  });

  return (
    <div className="relative xl:w-[28vw] bg-white p-[16px] rounded-[10px]">
      <div className="text-[32px] flex items-center  gap-x-[20px]">
        <Image
          src={finalName[0].icon.src}
          width={92}
          height={92}
          alt="bolt company icon"
        ></Image>
        {paramss.get("name")}
      </div>
      <div className="flex flex-col gap-y-[25px] mt-[21px]">
        <div className="font-robotoCon w-fit p-[10px] rounded-[10px] bg-darkerHomeGray">
          Shares Onwned : {finalName[0].owned}
        </div>
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
      <div className="absolute xl:bottom-[2px] xl:-right-[40px] sm:bottom-[10px] sm:left-[10px] bottom-[10px] left-0 z-30">
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              key={"popup"}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <InvestPopup setIsPopUpOpen={setIsPopupOpen}></InvestPopup>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setIsPopupOpen(true);
        }}
        className="p-[10px] gap-x-[10px] flex items-center rounded-[10px] bg-black text-white mt-[41px]"
      >
        Invest{" "}
        <BsBarChartFill
          className="fill-primaryPurple"
          size={24}
        ></BsBarChartFill>
      </button>
    </div>
  );
}
