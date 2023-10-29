import listingOne from "../../../public/PortfolioDisplay/listing-1.svg";
import listingTwo from "../../../public/PortfolioDisplay/listing-2.svg";
import listingThree from "../../../public/PortfolioDisplay/listing-3.svg";
import listingFour from "../../../public/PortfolioDisplay/listing-4.svg";
import Image from "next/image";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownLeftCircleFill,
  BsGlobe,
} from "react-icons/bs";

export default function SharesListing() {
  const listingArray = [
    { name: "Nestle", icon: listingOne, up: true, percent: "+0.6%" },
    { name: "Bolt", icon: listingTwo, up: false, percent: "-0.3%" },
    { name: "flutterwave", icon: listingThree, up: true, percent: "+0.9%" },
    { name: "Alat", icon: listingFour, up: false, percent: "-0.2%" },
  ];
  return (
    <>
      <div className="xl:block hidden">
        <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
          {" "}
          <BsGlobe fill="white" size={24} className="w-[24px]"></BsGlobe>
          <p>Listing</p>
        </div>
        <div className="lg:w-[45vw] xl:w-[48vw] p-[10px] bg-darkerHomeGray lg:flex flex-col gap-y-[15px] ">
          {listingArray.map((item, index) => {
            return (
              <div
                key={index}
                className="p-[10px] bg-white flex rounded-[16px]"
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
                    <div className="bg-black py-[14px] px-[10px] rounded-[12px] text-[12px] text-white h-fit flex w-fit text-[12px] font-robotoCon">
                      <p>Valuation- </p> 2 billion
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
      <div className="xl:hidden block mt-[23px]">
        <div className="bg-black text-white p-[10px] flex items-center gap-x-[10px] rounded-t-[10px]">
          {" "}
          <BsGlobe fill="white" size={24} className="w-[24px]"></BsGlobe>
          <p>Listing</p>
        </div>
        <div className="w-full  p-[10px] bg-darkerHomeGray flex flex-col gap-y-[15px] ">
          {listingArray.map((item, index) => {
            return (
              <div
                key={index}
                className="p-[10px] bg-white flex rounded-[16px] relative"
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
                      <div>Open: $38</div>
                      <div className="border-x px-[11px]">Down: $38</div>
                      <div>High: $38</div>
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
    </>
  );
}
