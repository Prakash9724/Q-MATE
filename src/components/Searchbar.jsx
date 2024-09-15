import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophoneLines } from "react-icons/fa6";
import { TbScan } from "react-icons/tb";

function Searchbar() {
  const [input, setInput] = useState();

  return (
    <div className="input-wrapper h-screen w-full bg-zinc-700 text-black relative">
      <div className="absolute flex  top-[15%] left-1/2 -translate-x-1/2 -translate-y-[15%] ">
        <form action="w-full ">
          <a
            className="absolute ml-4 text-3xl top-1/2 -translate-y-1/2"
            href=""
          >
            {" "}
            <IoSearchOutline />
          </a>

          <input
            className="w-[40vw] h-16 pl-16 pr-20 rounded-full focus:outline-none text-xl"
            placeholder="Ask Anything Here"
            type="text"
            value={input}
          />

          <div className="flex gap-3 justify-end mr-4 w-full">
            <a
              className="text-3xl absolute mr-4 right-[6%] -translate-x-[-6%] top-1/2 -translate-y-1/2"
              href=""
            >
              <TbScan />
            </a>
            <a
              className="text-3xl absolute mr-4  top-1/2 -translate-y-1/2"
              href=""
            >
              <FaMicrophoneLines />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
