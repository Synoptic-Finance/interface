import { CTAGreen } from "@/components/button";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-3 lg:px-12 w-screen py-7">
      <div className="flex justify-center items-center gap-2">
        <Image src="/images/logo.svg" width={30} height={30} alt="logo" />
        <span className="capitalize text-[0.95em] lg:text-[1em] font-[600]">
          synoptic finance
        </span>
      </div>
      <div className="flex justify-center items-center gap-3 lg:gap-5">
        <button className="btn btn-sm btn-ghost px-1 py-1 text-[#404040] flex justify-center items-center gap-1 uppercase text-[1em]">
          <VscGlobe />
          <span>en</span>
        </button>
        <CTAGreen
          items={
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] capitalize font-inter">
                launch dApp
              </span>
              <FiChevronRight />
            </div>
          }
        />
      </div>
    </div>
  );
}
