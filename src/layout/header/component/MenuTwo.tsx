"use client";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import React, { useState,useContext } from "react";

const MenuTwo = () => {
  const { toggleSideMenu } = useContext(
    AppContext
  ) as AppContextType;

  const [submenuOpen, setSubmenuOpen] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = (id: number) => {
    setSubmenuOpen(id);
    setOpen(!open);
  };

  return (
    <>
      {mobile_menu_data?.length &&
        mobile_menu_data?.map((item) => (
          <li
            onClick={() => handleMenuToggle(item.id)}
            key={item.id}
            className={`${item.hasDropdown && item?.submenus && submenuOpen === item.id && open === true
              ? "menu-item-has-children has-droupdown active"
              : `${item.hasDropdown && item?.submenus
                ? "menu-item-has-children has-droupdown"
                : ""
              }`
              }`}
          >
            <Link href={item.link}  onClick={item.hasDropdown ? (e) => e.preventDefault() : toggleSideMenu}> {item.title} </Link>
            {item.hasDropdown === true && (
              <ul
                className={
                  item.submenus && submenuOpen === item.id && open === true
                    ? "submenu active"
                    : "submenu"
                }
                style={{
                  display:
                    item.submenus && submenuOpen === item.id && open === true
                      ? "block"
                      : "none",
                }}

                
              >
                {item?.submenus?.length &&
                  item?.submenus.map((data, index) => (
                    <li key={index}>
                      <Link onClick={toggleSideMenu} href={`/${data.id}`}> {data.title} </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
    </>
  );
};

export default MenuTwo;
