import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";

function BlueContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`transition ease-linear py-[3rem] ${
        theme === "light"
          ? "bg-[#B3CEF8] text-[#353535]"
          : "bg-[#3281FF] text-[#F2F2F2]"
      }`}
    >
      <div className="container w-[80%] mx-auto">{children}</div>
    </section>
  );
}

BlueContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlueContainer;
