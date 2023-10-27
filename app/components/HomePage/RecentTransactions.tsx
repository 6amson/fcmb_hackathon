import creditIcon from "../../../public/HomePage/credit-icon.svg";
import investmentIcon from "../../../public/HomePage/investment-icon.svg";
import investmentWithdrawalIcon from "../../../public/HomePage/investment-withdraw-icon.svg";
import withdrawalIcon from "../../../public/HomePage/withdrawal-icon.svg";
import Image from "next/image";

export default function RecentTransactions() {
  const transactionsArray = [
    { name: "credit", icon: creditIcon, from: "08918383848 fcmb" },
    {
      name: "investment",
      icon: investmentIcon,
      to: "make me a billionaire portfolio",
    },
    {
      name: "investment withdrawal",
      icon: investmentWithdrawalIcon,
      from: "make me a billionaire portfolio",
    },
    { name: "withdrawal", icon: withdrawalIcon, to: "0813848828 fcmb" },
  ];

  return (
    <div className="w-full">
      <div className="w-full hidden lg:flex flex-col gap-y-[10px]">
        {" "}
        {transactionsArray.map((item, index) => {
          return (
            <div
              className="relative flex bg-white items-center py-2 px-[12px] rounded-[16px]"
              key={index}
            >
              <Image
                src={item.icon.src}
                width={100}
                height={100}
                alt={item.name + " icon"}
              ></Image>
              <div className="flex ml-[24px] items-center gap-x-[12px] text-[12px] xl:text-base">
                <div
                  className={`${
                    item.to ? "bg-statusRed" : "bg-statusGreen"
                  } text-white px-[10px] py-[4px] rounded-full`}
                >
                  {item.name}
                </div>
                <div className="bg-darkerHomeGray text-[#4E4D4D] max-w-[170px] xl:max-w-[200px] truncate px-[10px] py-[4px] rounded-full">
                  {item.from ? `from: ${item.from}` : `to: ${item.to}`}
                </div>
              </div>
              <div className="absolute right-[12px] flex gap-[24px] font-robotoCon text-white h-[47px]">
                <div className="w-[160px] bg-black h-full flex items-center justify-center rounded-[12px]">
                  N166,000
                </div>
                <div className="w-[65px] bg-black h-full flex items-center justify-center rounded-[12px]">
                  12:50am
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-[9px] lg:hidden">
        {transactionsArray.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-white p-[7px] rounded-[16px] "
            >
              <Image
                src={item.icon.src}
                width={90}
                height={90}
                alt={item.name + " icon"}
              ></Image>
              <div className="mt-[30px] flex items-center justify-between font-robotoCon text-white ">
                <div className="w-[169px] bg-black py-[14px] text-center rounded-[12px]">
                  166,000
                </div>
                <div className="w-[55px] bg-black py-[14px] text-[12px] text-center rounded-[12px]">
                  12:50am
                </div>
              </div>

              <div
                className={`${
                  item.to ? "bg-statusRed" : "bg-statusGreen"
                } text-white px-[10px] rounded-full w-fit text-right absolute top-[6px] right-[6px] text-[11px] truncate py-[4px]`}
              >
                {item.name}
              </div>
              <div className="bg-darkerHomeGray rounded-full px-[10px] text-homeGrayText w-fit max-w-[160px] absolute top-[32px] py-[4px] truncate right-[6px] text-[11px]">
                {item.from ? item.from : item.to}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
