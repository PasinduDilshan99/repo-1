"use client";
import React, { useState } from "react";
import { ElementType } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

interface Props {
  name: string;
  actions: string[];
  Icon: ElementType;
}

const SideBarComponent = ({ name, actions, Icon }: Props) => {
  const [result, setResult] = useState(false);
  const nameForResult: string = name;
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between w-56 h-9 pl-2 bg-zinc-300 rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="pr-2">
            <Icon />
          </div>
          <div>{name}</div>
        </div>
        <div className="pl-2 flex">
          <button
            onClick={() => {
              setResult(!result);
            }}
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      <div className="pb-3">
        {result ? (
          <div className="">
            {actions.map((item) => (
              <Link key={item} href="/" className="">
                <p className="bg-white pl-5 rounded-md hover:bg-gray-300">- {item}</p>
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SideBarComponent;
