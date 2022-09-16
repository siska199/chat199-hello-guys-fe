import React from "react";
import MenuMini from "../Layouts/MenuMini";

const SettingMenu = () => {
  const menu = ["Group baru", "Pesan berbintang", "Setelan", "Keluar"];
  return (
    <>
      <MenuMini menu={menu} />
    </>
  );
};

export default SettingMenu;
