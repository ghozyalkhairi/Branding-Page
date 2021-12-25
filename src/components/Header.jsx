import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import NavBar from "./NavBar";

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={`transition ease-linear py-6 text-lg sticky top-0 opacity-90 ${
        theme === "light" ? "bg-[#F2F2F2]" : "bg-[#353535]"
      }`}
    >
      <NavBar />
    </header>
  );
}

export default Header;
