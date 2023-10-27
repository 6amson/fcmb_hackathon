import Image from "next/image";
import BalanceStatement from "./components/HomePage/BalanceStatment";
import AiNewsSummarize from "./components/HomePage/AiNewsSummarize";
import RecentTransactions from "./components/HomePage/RecentTransactions";
import { RE } from "country-flag-icons/react/3x2";

export default function Home() {
  return (
    <div className="h-screen w-full px-[15px] py-[31px]">
      <div className="pb-[30px]">
        <div className="flex flex-col lg:flex-row  justify-center lg:gap-x-[15px]">
          {" "}
          <BalanceStatement></BalanceStatement>
          <AiNewsSummarize></AiNewsSummarize>
        </div>
        <div className="xl:w-[78vw] bg-darkerHomeGray w-full  h-fit lg:h-[300px] border-black mt-[22px] rounded-[12px] mx-auto p-[10px]">
          <RecentTransactions></RecentTransactions>
        </div>
      </div>
    </div>
  );
}
