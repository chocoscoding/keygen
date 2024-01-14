"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useRef } from "react";

const Client = (props: { data: string }) => {
  const [key, setKey] = useState(props.data);
  const [keyLength, setKeyLength] = useState(32);
  const [keyLengthError, setKeyLengthError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [copied, setCopied] = useState("Copy to clipboard");
  const copyAction = () => {
    navigator.clipboard.writeText(`${key}`);
    setCopied("copied");
  };

  const lengthSetter = (e: any) => {
    //convert string to number
    const num = parseInt(e.target.value);
    setKeyLength(parseInt(e.target.value));
    if (keyLength < 1 || keyLength > 999999) {
      console.log(keyLength);
      setKeyLengthError(true);
    } else {
      setKeyLengthError(false);
    }
  };
  const { refresh } = useRouter();
  const generate = async (e: FormEvent) => {
    setStatus("loading");
    e.preventDefault();
    try {
      if (keyLength < 1 || keyLength > 999999) return;

      const generateApi = await fetch("/api/generate/" + keyLength);
      const response = await generateApi.json();
      const { key } = response;
      setKey(key);
      setCopied("Copy to clipboard");
      setStatus("idle");
    } catch (error) {
      console.error(error);
      refresh();
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 1000);
    }
  };
  return (
    <section className="z-10 relative text-gray-900 w-full rounded-[14px] bg-white px-4 py-5 shadow-md">
      <form
        onSubmit={generate}
        className="w-full ">
        <div className="w-full flex flex-wrap justify-between mb-10">
          <div className="flex items-center mobile:w-auto w-full mobile:mb-none mb-2">
            <p className="mr-2">Length:</p>
            <input
              className={`h-[36px] outline-none bg-opacity-30 rounded-[7px]  border border-opacity-40 px-2 ${
                keyLengthError ? "border-red-500" : "border-indigo-500"
              } w-full`}
              type="number"
              placeholder="key length"
              value={keyLength}
              onChange={lengthSetter}
            />
          </div>
          <button
            disabled={status !== "idle"}
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 disabled:opacity-90 transition-all rounded-[7px] px-5 py-1.5 text-white mobile:w-auto w-full">
            Generate
          </button>
        </div>
      </form>
      <div className="h-[295px] relative bg-indigo-100 bg-opacity-30 rounded-[14px] border border-indigo-500 border-opacity-40 overflow-hidden">
        <div className=" bg-gradient-to-t from-indigo-100 from-20% absolute bottom-0 w-full h-9"></div>
        <div
          id="keyGen"
          className=" p-2 break-words overflow-hidden line-clamp-[12] bg-transparent h-full w-full">
          {key}
        </div>
      </div>
      <button
        onClick={copyAction}
        className="w-full text-center mt-5 cursor-pointer bg-indigo-500 hover:bg-indigo-600 rounded-[46px] text-white py-2">
        {copied}
      </button>
    </section>
  );
};

export default Client;
