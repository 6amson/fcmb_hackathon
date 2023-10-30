"use client";
import listingOne from "../../../public/PortfolioDisplay/listing-1.svg";
import listingTwo from "../../../public/PortfolioDisplay/listing-2.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownLeftCircleFill,
  BsGlobe,
  BsFolderPlus,
} from "react-icons/bs";

export default function StockOwned() {
  const router = useRouter();
  const listingArray = [
    {
      name: "Nestle",
      icon: listingOne,
      up: true,
      percent: "+0.6%",
      onClick: () => {
        router.push("/sharesPage?name=nestle");
      },
    },
    {
      name: "Bolt",
      icon: listingTwo,
      up: false,
      percent: "-0.3%",
      onClick: () => {
        router.push("/sharesPage?name=bolt");
      },
    },
  ];
  return (
    <div className="w-full">
      <div className="lg:block hidden w-fit">
        <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
          {" "}
          <BsFolderPlus
            fill="white"
            size={24}
            className="w-[24px]"
          ></BsFolderPlus>
          <p>Shares Owned</p>
        </div>
        <div className="w-full xl:w-[48vw] p-[10px] bg-white lg:flex flex-col gap-y-[15px] ">
          {listingArray.map((item, index) => {
            return (
              <div
                onClick={() => {
                  item.onClick();
                }}
                key={index}
                className="p-[10px] bg-darkerHomeGray flex rounded-[16px] cursor-pointer"
              >
                <Image
                  src={item.icon}
                  width={94}
                  height={94}
                  alt={`${item.name + " icon"}`}
                ></Image>

                <div className="flex justify-between w-full pl-[14px]">
                  <div className="flex flex-col justify-between">
                    {" "}
                    <div>{item.name}</div>
                    <div className="px-[10px] py-[14px] bg-black rounded-[12px] text-white font-robotoCon flex w-fit text-[12px] gap-x-[11px]">
                      <div>Open: $38</div>
                      <div className="border-x px-[11px]">Down: $38</div>
                      <div>High: $38</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-x-[10px]">
                      <div className="bg-black py-[14px] px-[10px] rounded-[12px] text-[12px] text-white h-fit flex w-fit text-[12px] font-robotoCon">
                        <p>Valuation- </p> 2 billion
                      </div>
                      <div className="bg-black py-[14px] px-[10px] rounded-[12px] text-[12px] text-white h-fit flex w-fit text-[12px] font-robotoCon">
                        <p>Shares Owned- </p> 40
                      </div>
                    </div>
                    <div className="flex gap-x-2  justify-end">
                      <p
                        className={`${
                          item.up ? "text-statusGreen" : "text-statusRed"
                        } font-robotoCon px-[3px] py-[6px] border-darkerHomeGray border rounded-[12px]`}
                      >
                        {item.percent}
                      </p>
                      {!item.up ? (
                        <BsArrowDownLeftCircleFill
                          size={32}
                          className="fill-statusRed w-[32px]"
                        ></BsArrowDownLeftCircleFill>
                      ) : (
                        <BsArrowUpRightCircleFill
                          size={32}
                          className="fill-statusGreen w-[32px]"
                        ></BsArrowUpRightCircleFill>
                      )}{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden block mt-[23px]">
        <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
          {" "}
          <BsFolderPlus
            fill="white"
            size={24}
            className="w-[24px]"
          ></BsFolderPlus>
          <p>Shares Owned</p>
        </div>
        <div className="w-full  p-[10px] bg-white flex flex-col gap-y-[15px] ">
          {listingArray.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  item.onClick();
                }}
                className="p-[10px] bg-darkerHomeGray flex rounded-[16px] relative cursor-pointer"
              >
                <div className="flex flex-col justify-between">
                  <Image
                    src={item.icon}
                    width={62}
                    height={62}
                    className="w-fit "
                    alt={`${item.name + " icon"}`}
                  ></Image>
                  <div className="text-[12px]">{item.name}</div>
                </div>
                <div className="flex justify-between w-full pl-[14px]">
                  <div className="flex flex-col justify-between gap-y-[4px]">
                    {" "}
                    <div className="bg-black py-[14px] px-[10px] rounded-[12px] text-[11px] lg:text-[12px] text-white h-fit flex w-fit  font-robotoCon">
                      <p>Valuation- </p> 2 billion
                    </div>
                    <div className="px-[10px] py-[14px] bg-black rounded-[12px] text-white font-robotoCon flex w-fit text-[11px] lg:text-[12px] gap-x-[11px]">
                      <div>Open: N2000</div>
                      <div className="border-x px-[11px]">Down: N1800</div>
                      <div>High: N2100</div>
                    </div>
                    <div className="bg-black py-[14px] px-[10px] rounded-[12px] text-[11px] lg:text-[12px] text-white h-fit flex w-fit  font-robotoCon">
                      <p>Shares Owned- </p> 40
                    </div>
                  </div>
                  <div className="flex gap-x-2  justify-end absolute top-[10px] right-[10px]">
                    <p
                      className={`${
                        item.up ? "text-statusGreen" : "text-statusRed"
                      } font-robotoCon px-[3px] py-[6px] border-darkerHomeGray border rounded-[12px]`}
                    >
                      {item.percent}
                    </p>
                    {!item.up ? (
                      <BsArrowDownLeftCircleFill
                        size={32}
                        className="fill-statusRed w-[32px]"
                      ></BsArrowDownLeftCircleFill>
                    ) : (
                      <BsArrowUpRightCircleFill
                        size={32}
                        className="fill-statusGreen w-[32px]"
                      ></BsArrowUpRightCircleFill>
                    )}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
