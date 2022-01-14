import React from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import "./Burger.scss";
const Burger = () => {
  const { openNavMenu, handleOpenNavMenu } = useGlobalContext();
  return (
    <>
      <div
        className={`menu-btn ${openNavMenu ? "open" : ""}`}
        onClick={() => handleOpenNavMenu()}
      >
        <div
          className={`menu-btn__burger ${openNavMenu ? "harvest-gold" : ""}`}
        ></div>
      </div>
    </>
  );
};
export default Burger;
