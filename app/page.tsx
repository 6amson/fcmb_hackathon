import Image from "next/image";
import BalanceStatement from "./components/HomePage/BalanceStatment";
import AiNewsSummarize from "./components/HomePage/AiNewsSummarize";

export default function Home() {
  return (
    <div className="h-screen w-full px-[15px] py-[31px]">
      <div>
        <div className="flex justify-center gap-x-[15px]">
          {" "}
          <BalanceStatement></BalanceStatement>
          <AiNewsSummarize></AiNewsSummarize>
        </div>
        <div className="xl:w-[78vw] bg-darkerHomeGray w-full border h-[300px] border-black mt-[22px] rounded-[12px] mx-auto"></div>
      </div>
    </div>
  );
}
