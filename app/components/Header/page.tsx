import React from "react";
import styles from "./Header.module.scss";
import Login from "../buttons/Login";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-44 py-0 mt-10 flex-wrap mb-0 pb-0">
      <div className="flex items-center pr-6">
        <div className={styles.logoIcon}></div>
        <img
          className="pr-1"
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
          width="50px"
          alt="BookAI Logo"
        />
        <span className="font-extrabold text-2xl">BookAI</span>
      </div>
      <div className="flex items-center flex-wrap">
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600 gap-x-1"
          href="#features"
        >
          Features
        </a>
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600"
          href="#how-it-works"
        >
          How It Works
        </a>
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600"
          href="#roadmap"
        >
          Roadmap
        </a>
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600"
          href="/api"
        >
          API
        </a>
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600"
          href="/api#pricing"
        >
          Price
        </a>
        <a
          className="ml-5 font-light cursor-pointer hover:text-violet-600"
          href="/api#pricing"
        >
          Models
        </a>
        <a
          href="javascript:void(0);"
          id="profile-button"
          style={{ display: "none" }}
        >
          Profile
        </a>

        <a href="javascript:void(0)" className="pl-4">
          <Login title="Login/Signup" />
        </a>
      </div>
    </header>
  );
};

export default Header;
