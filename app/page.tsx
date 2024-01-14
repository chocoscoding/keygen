import Image from "next/image";
import Client from "./Client";
import MyMarquee from "./components/MyMarquee";
import Link from "next/link";
import { promisify } from "util";
import { randomBytes } from "crypto";
const randomBytesAsync = promisify(randomBytes);

export default async function Home() {
  
  const randomString = (await randomBytesAsync(Math.ceil(length / 2))).toString("hex").slice(0, 32);

  const styledText =
    "text-indigo-500  tablet:text-[60px] pcmini:text-[70px] mobile:text-[35px] text-[20px] font-normal nycd leading-[40px] tablet:leading-[90px] pcmini:leading-[113px] mx-3";
  return (
    <main className="p-3 overflow-hidden">
      {/* section 1 */}
      <h1 className="relative z-10 text-gray-800 pcmini:text-[75px] tablet:text-[60px] mobile:text-[50px] text-[35px]  font-bold text-center max-w-[1100px] m-auto ">
        Create a<span className={styledText}>Secure</span>
        and <span className={styledText}>Strong</span>
        secret key 🔑
      </h1>

      <MyMarquee />
      {/* section 2 */}
      <section className="w-full max-w-[1005px] m-auto z-10 relative">
        <div className="top"></div>
        <section>
          <Client data={randomString} />
        </section>
      </section>

      {/* section 3 */}
      <div className="w-full h-5 flex items-center justify-center text-gray-800 mt-12 relative z-10">
        Made with ❤️ by
        <Link
          className="cursor-pointer text-indigo-500 no-underline ml-1 "
          href="https://github.com/chocoscoding"
          rel="noopener noreferrer"
          target="_blank">
          {" "}
          chocoscoding
        </Link>
      </div>
      <Image
        src={"/main.png"}
        fill
        alt="mainBgImage"
        className="z-1 select-none"
      />
    </main>
  );
}
