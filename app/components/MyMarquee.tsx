"use client";

import Marquee from "react-fast-marquee";

const MyMarquee = () => {
  return (
    <div className="flex items-center bg-indigo-500 overflow-hidden w-full h-8 z-10 relative mb-10 my-5">
      <Marquee>
        <span className="textstroke">91a49403998222bc9f797223e09ae414573c5b8039b5d02bf50da6b308b739bfd691a49403998222bc9f</span>
        <span className="textstroke">91a49403998222bc9f797223e09ae414573c5b8039b5d02bf50da6b308b739bfd691a49403998222bc9f</span>
      </Marquee>
    </div>
  );
};

export default MyMarquee;
