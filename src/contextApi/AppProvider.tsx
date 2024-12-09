"use client";

import { AppContextType, coursesType } from "@/interFace/interFace";
import React, { createContext, useState } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [headerSerachOpen, setHeaderSerachOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [inputValue, setInputValue] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");

  const [bookSubject, setBookSubject] = useState<coursesType[] | undefined>(undefined);
  const [country, setCountry] = useState<string>("SG");


  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleHeaderSerach = () => {
    setHeaderSerachOpen(!headerSerachOpen);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    headerSerachOpen,
    toggleHeaderSerach,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    inputValue,
    setInputValue,
    filterType,
    setFilterType,
    bookSubject,
    setBookSubject,
    country,  
    setCountry 
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
