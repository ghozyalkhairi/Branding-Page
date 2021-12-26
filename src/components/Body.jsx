import { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";

function Body({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition ease-linear h-full ${
        theme === "light"
          ? "bg-white] text-[#353535]"
          : "bg-[#353535] text-[#F2F2F2]"
      }`}
    >
      {children}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
