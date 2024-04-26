"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Link from "next/link";

interface Props {
  username: string;
}

const Header = ({ username }: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-gray-300 h-20">
        <div className="flex flex-row p-3">
          <div className="pl-3">
            <Link href="/">
              <LogoDevIcon className="w-14 h-14" />
            </Link>
          </div>
          <div className="pl-3 pt-2 text-4xl">
            <h1 className="text-black">GSMA CAMARA</h1>
          </div>
        </div>
        <div className="p-2 pr-6">
          {username != "" ? (
            <div className="flex flex-row">
              <Profile />
              <h3 className="flex flex-row items-center pl-2"> {username}</h3>
            </div>
          ) : (
            <Link href="/">
              <PersonAddAltIcon className="w-12 h-12" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
