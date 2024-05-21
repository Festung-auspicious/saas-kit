"use client"
import React, { createContext, useEffect, useState } from "react";
export interface ThemeContextProps {
  theme: string;
  changeTheme: Function ;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "",
  changeTheme: () => console.error("Change Theme not Define"),
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("handsome");

  useEffect(()=>{
    setTheme(localStorage.getItem('theme') ?? theme) 
  },[]);
  const changeTheme = (theme: string = "dark") => {
    localStorage.setItem("theme",theme)
    setTheme(theme);

  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

