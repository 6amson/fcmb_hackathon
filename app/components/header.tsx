"use client";
import { useSearchParams, usePathname } from "next/navigation";
export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div className="flex relative items-center h-full">
      <div
        className={`${
          pathname === "/portfolio" ? "" : "hidden"
        } absolute left-[10px] xl:left-[20px] bg-darkerHomeGray p-[20px] rounded-[16px] text-[12px]`}
      >
        {searchParams.get("name")}
      </div>
      <div className="right-[10px] absolute font-robotoCon">
        London, 16: 59am
      </div>
    </div>
  );
}
