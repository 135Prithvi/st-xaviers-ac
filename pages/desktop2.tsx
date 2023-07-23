import type { NextPage } from "next";

const Desktop2: NextPage = () => {
  return (
    <div className="relative bg-darkslategray-100 w-full h-[1024px] overflow-hidden">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="/polygon-1.svg"
      />
    </div>
  );
};

export default Desktop2;
