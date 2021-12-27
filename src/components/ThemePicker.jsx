import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemePicker() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button onClick={changeTheme}>
      {theme === "light" ? (
        <FaSun className="hover:opacity-70" size="1.6em" />
      ) : (
        <FaMoon className="hover:opacity-70" size="1.6em" />
      )}
    </button>
  );
}

export default ThemePicker;
