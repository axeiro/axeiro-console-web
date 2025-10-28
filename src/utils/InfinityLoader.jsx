import React from "react";
import Lottie from "lottie-react";
import infinityLoader from "../assets/infinityLoader.json"; // 👈 your JSON file path

export default function InfinityLoader({
  size = 160,
  loop = true,
  label = "axeiro",
}) {
  return (
    <div className="absolute flex flex-col items-center justify-center z-50 ">
      <Lottie
        animationData={infinityLoader}
        loop={loop}
        style={{
          width: size,
          height: size,
        }}
      />
      {/* <p className=" text-teal-200 uppercase tracking-wide text-sm font-medium absolute top-[60%]">
        {label}
      </p> */}
    </div>
  );
}
