import React, { useContext, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [links, setLinks] = useState([
    {
      url: "/",
      title: "Home",
      picture: "edmonton",
      Icon: AiFillHome,
      toggleHighlight: false,
      togglePicture: false,
    },
    {
      url: "/about",
      title: "About",
      picture: "about-banner",
      Icon: BsFillPersonFill,
      toggleHighlight: false,
      togglePicture: false,
    },
    {
      url: "/services",
      title: "Services",
      picture: "computer",
      Icon: RiComputerFill,
      toggleHighlight: false,
      togglePicture: false,
    },
    {
      url: "/contact",
      title: "Contact",
      picture: "phone",
      Icon: AiFillPhone,
      toggleHighlight: false,
      togglePicture: false,
    },
  ]);
  const handleOpenNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };
  const handleMenuButton = (title) => {
    links.map((link) => {
      if (link.title === title) {
        link.toggleHighlight = true;
        link.togglePicture = true;
      } else {
        link.toggleHighlight = false;
        link.togglePicture = false;
      }
      return link;
    });
    setLinks([...links]);
  };
  const handleRefreshHighlight = (currentUrl) => {
    links.map((link) => {
      if (link.url === currentUrl) {
        link.toggleHighlight = true;
        link.togglePicture = true;
      } else {
        link.toggleHighlight = false;
        link.togglePicture = false;
      }
      return link;
    });
    setLinks([...links]);
  };
  return (
    <AppContext.Provider
      value={{
        openNavMenu,
        links,
        setOpenNavMenu,
        handleOpenNavMenu,
        setLinks,
        handleMenuButton,
        handleRefreshHighlight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
