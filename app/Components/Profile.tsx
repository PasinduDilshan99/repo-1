import React, { useState, useRef, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const ProfileClick = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={profileRef}>
      <div className="inline-block">
        <button onClick={ProfileClick}>
          <AccountCircleIcon className="w-12 h-12" />
        </button>
      </div>
      {showProfile && (
        <div className="absolute top-full left-0 bg-white border border-gray-200 p-2 rounded shadow pr-10">
          <Link href="/">Profile</Link>
          <Link href="/" className="flex flex-row">
            <LogoutIcon />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
