
"use client"

import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "./ThemeProvider";

export const Themer = ({ children }: any) => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);
  return( <html lang="en" data-theme={theme}>{children}</html>);
};