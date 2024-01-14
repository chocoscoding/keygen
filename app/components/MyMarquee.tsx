"use client";

import Marquee from "react-fast-marquee";

const MyMarquee = () => {
  return (
    <div className="flex items-center bg-indigo-500 overflow-hidden w-full h-8 z-10 relative mb-10 my-5">
      <Marquee>
        <span className="textstroke">03107ef99aabd573f999c74d0bf4bf5bed0c70e0932965650afb93ef9b7e57096f61078298366d89cb0fe0b8228de30942bc3cd167f05b3b9c8e88aef7a825d924af632a018070745e72e5a222e7a0b882e26d62e00e9ee43b3fc288477581360c5fa978123f5665806092a6d063554b1559e01a0916b2d84ea242d8d95a1bfe3b9ee5a2646f865e8acbfa085c99facf469e028fc3f5bb4e1dcca61264e6e4f118fd5ebf6fe1c7d7a78fb6314e75bc46fcc56eda4f3c17b4ae2fa49650cf5e184eeca4463</span>
        <span className="textstroke">
          132bb158c0b4383b77490acc2dd59f7259accdeaf32ca6478e14f5703d34dfaccfa2b96af1c0e3d7b2b600b1e0a4e20b8db97f04639b683441b698eb21405053279fee0605d0ebddd90c84385bf0ac23e549fac0dcce1462e998cb4e71eb0d6b00eb5e8aaf205c056a3a92456834e6a4a66904d64e5b6cccc2ddf443215284983707398f20a571cd6c273f16122b81d9449fc6fa0b3e100acd14e5ca381004ae05b15f1b2e38a27542238c24526a94762e4a020372092b5856586fd7a50343a5b2e4f4986
        </span>
      </Marquee>
    </div>
  );
};

export default MyMarquee;
