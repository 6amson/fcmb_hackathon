import PortfolioList from "../components/PortfolioDisplay/PortfolioList";
import SharesListing from "../components/PortfolioDisplay/SharesListings";
import Image from "next/image";
import createPortfolioIcon from "../../public/PortfolioDisplay/create-portfolio-icon.svg";
export default function Portfolio() {
  return (
    <div className="xl:px-[30px] xl:py-[31px] px-[15px] py-[31px]">
      <div className="mb-[30px]">
        <button className="text-white bg-black flex items-center w-fit gap-x-[10px] p-[10px] rounded-[10px]">
          {" "}
          Create Portfolio
          <Image
            src={createPortfolioIcon.src}
            width={24}
            height={24}
            alt="create portfolio icon"
          ></Image>
        </button>
      </div>
      <div className="flex xl:flex-row flex-col justify-between  pb-[60px]">
        <PortfolioList></PortfolioList>
        <SharesListing></SharesListing>
      </div>
    </div>
  );
}
