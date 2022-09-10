import React from "react";
import { ContainerSettingMenu } from "./settingMenu.css";

const SettingMenu = () => {
  const menu = ["Group baru", "Pesan berbintang", "Setelan", "keluar"];
  return (
    <ContainerSettingMenu>
      {menu.map((data, i) => (
        <div key={i}>{data}</div>
      ))}
    </ContainerSettingMenu>
  );
};

export default SettingMenu;
