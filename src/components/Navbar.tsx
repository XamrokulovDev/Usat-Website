import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import globe from "../assets/globe.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLang, setShowLang] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const langRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const globeBtnRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLDivElement | null>(null);

  const [langPos, setLangPos] = useState({ x: 0, y: 0 });
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        langRef.current &&
        !langRef.current.contains(target) &&
        !target.closest("#globe-icon")
      ) {
        setShowLang(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest("#menu-icon")
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangSelect = (lang: string) => {
    console.log("Language selected:", lang);
    setShowLang(false);
  };

  const handleMenuClick = (item: string) => {
    console.log("Menu item clicked:", item);
    setShowMenu(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full absolute top-0 left-0 z-50 py-[30px]"
      >
        <div className="max-w-[1380px] mx-auto flex items-center justify-between">
          {/* Globe icon */}
          <motion.div
            id="globe-icon"
            ref={globeBtnRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-[50px] h-[50px] bg-[#EFEFEF] flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => {
              if (globeBtnRef.current) {
                const rect = globeBtnRef.current.getBoundingClientRect();
                setLangPos({ x: rect.left, y: rect.bottom });
              }
              setShowLang(!showLang);
              setShowMenu(false);
            }}
          >
            <img 
              src={globe} 
              alt="globe icon" 
              className="w-[24px] h-[24px]" 
            />
          </motion.div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <NavLink to="/">
              <img 
                src={logo} 
                alt="logo image" 
                className="w-[227px]" 
              />
            </NavLink>
          </motion.div>
          {/* Menu icon */}
          <motion.div
            id="menu-icon"
            ref={menuBtnRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-[50px] h-[50px] bg-[#EFEFEF] flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => {
              if (menuBtnRef.current) {
                const rect = menuBtnRef.current.getBoundingClientRect();
                setMenuPos({ x: rect.left, y: rect.bottom });
              }
              setShowMenu(!showMenu);
              setShowLang(false);
            }}
          >
            <motion.img
              src={menu}
              alt="menu icon"
              className="w-[24px] h-[24px]"
              animate={{ rotate: showMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.nav>
      {/* Til menyusi */}
      <AnimatePresence>
        {showLang && (
          <motion.div
            ref={langRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: langPos.y + 10,
              left: langPos.x,
            }}
            className="bg-white shadow-lg rounded-xl z-40 flex flex-col gap-1 p-1"
          >
            <button
              onClick={() => handleLangSelect("uz")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              🇺🇿 Uzb
            </button>
            <button
              onClick={() => handleLangSelect("ru")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              🇷🇺 Rus
            </button>
            <button
              onClick={() => handleLangSelect("en")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              🇬🇧 Eng
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Menu menyusi */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: menuPos.y + 10,
              left: menuPos.x,
            }}
            className="bg-white shadow-lg rounded-xl z-40 flex flex-col gap-1 p-1"
          >
            <button
              onClick={() => handleMenuClick("home")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleMenuClick("about")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleMenuClick("contact")}
              className="hover:bg-gray-100 px-4 py-2 text-left rounded cursor-pointer"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
