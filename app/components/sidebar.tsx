"use client";
import logo from "../home/logo.png";
import userImage from "../../public/CreditPage/user-image.jpg";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Dispatch, SetStateAction, useState, useContext } from "react";
import { MainContext, MainContextTypes } from "./MainContext/MainContext";
import { BsHouseFill, BsFolderFill, BsPersonFill } from "react-icons/bs";

export default function SideBar() {
  const {
    setIncomingCollateralRequest,
    mainPayload,
    setMainPayload,
    setWalletAmount,
    walletAmount,
  } = useContext(MainContext) as MainContextTypes;
  const pathName = usePathname();
  const router = useRouter();

  const headerIconsProp = {
    color: "white",
    size: 21,
  };

  const headerIcons = [
    {
      name: "home",
      icon: (
        <BsHouseFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsHouseFill>
      ),
      selected: pathName === "/",
      onclick: () => {
        router.push("/");
      },
    },
    {
      name: "portfolio",
      icon: (
        <BsFolderFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsFolderFill>
      ),
      selected: pathName === "/portfolioDisplay",
      onclick: () => {
        router.push("/portfolioDisplay");
      },
    },
    {
      name: "credit info",
      icon: (
        <BsPersonFill
          size={headerIconsProp.size}
          color={headerIconsProp.color}
        ></BsPersonFill>
      ),
      selected: pathName === "/creditPage",
      onclick: () => {
        router.push("/creditPage");
      },
    },
  ];
  return (
    <div className="w-full">
      <div className="text-white flex justify-around mt-[10px] lg:hidden">
        {headerIcons.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                item.onclick();
              }}
              className={`text-white text-[12px] w-[90px] text-center flex flex-col items-center p-[10px] rounded-[10px]  ${
                item.selected ? "bg-headerGray" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="w-[60px] overflow-hidden h-[60px] rounded-full mb-[20px] mt-[40px] mx-auto lg:flex hidden items-center justify-center">
        <Image src={logo.src} width={60} height={60} alt="logo"></Image>
      </div>
      <div className="w-3/5 h-[1px] bg-headerTextGray mx-auto mb-[20px] lg:block hidden"></div>
      <div className="px-[20px] lg:flex flex-col gap-y-[30px] hidden">
        {headerIcons.map((item, index) => {
          return (
            <button
              onClick={() => {
                item.onclick();
                setIncomingCollateralRequest(false);
              }}
              key={index}
              className={`text-white flex items-center gap-x-[18px] rounded-[12px] px-[10px] ${
                item.selected ? "bg-headerGray" : ""
              }`}
            >
              <div className="py-[10px]">{item.icon} </div>{" "}
              <p className="capitalize text-headerTextGray">{item.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
