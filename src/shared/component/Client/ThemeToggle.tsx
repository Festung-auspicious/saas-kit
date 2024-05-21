"use client";
import { ThemeContext } from "@/shared/Provider/ThemeProvider";
import { THEME } from "@/shared/const";
import React, { useContext } from "react";
type ThemeToggleProps = {
  theme: [];
  title: "Theme";
};

export default function ThemeToggle({ theme = THEME, title = "Theme" }) {
  const { changeTheme } = useContext(ThemeContext);
  function handleChangeTheme(e: any) {
    changeTheme(e.target?.value);
  }
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {title}
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        onChange={handleChangeTheme}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {theme?.map((name: string|object) => {
          let value:string;
          if(typeof(name) === 'object'){
              value=Object.keys(name)[0]
          }
          else{
            value=name;
          }
          return (
            <li key={value}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={value.toUpperCase()}
                value={value}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
