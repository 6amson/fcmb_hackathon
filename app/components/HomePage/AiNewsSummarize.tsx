import { BsCpu } from "react-icons/bs";

export default function AiNewsSummarize() {
  const articles = [
    { headlines: "APPLE Stock just fell down 0.5% " },
    { headlines: "APPLE Stock just fell down 0.5% and the irf decidess to " },
    { headlines: "APPLE Stock just fell down 0.5% " },
    { headlines: "APPLE Stock just fell down 0.5% " },
  ];

  return (
    <div className="lg:w-[30vw] w-full lg:h-[380px]  rounded-[12px] bg-white px-[12px] py-[32px] relative">
      <div className="flex flex-col gap-y-[15px] pb-[30px]">
        {articles.map((item, index) => {
          return (
            <div
              className="flex items-center justify-between gap-x-[10px]"
              key={index}
            >
              <div className="px-[21px] py-[10px] rounded-[10px] border border-black lg:w-[200px] xl:w-[300px] truncate">
                {item.headlines}
              </div>
              <button className="py-[10px] px-[8px] rounded-[10px] bg-black text-white text-[12px]">
                Read
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-0 right-0 rounded-tr-none rounded-[10px] bg-black p-[10px] text-white text-[12px] gap-x-[10px] items-center">
        <div className="rounded-[4px] bg-primaryPurple">
          {" "}
          <BsCpu size={24} fill={"black"}></BsCpu>
        </div>
        <p>Summarize Stock news articles with ai </p>
      </div>
    </div>
  );
}
