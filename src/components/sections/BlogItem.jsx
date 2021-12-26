import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import PropTypes from "prop-types";

function BlogItem({ primary = false, tanggal, judul, isi }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col gap-[3rem] py-[4rem] px-[1rem] rounded-lg ${
        primary ? "bg-[#3281FF] text-[#F2F2F2]" : "bg-[#F2F2F2]"
      } ${theme === "dark" && !primary && "bg-[#303030]"}`}
    >
      <p className="text-lg opacity-50">{tanggal}</p>
      <h2 className={`text-3xl font-semibold ${!primary && "text-[#3281FF]"}`}>
        {judul}
      </h2>
      <h3 className="text-xl">{isi}</h3>
      <p className={`text-lg ${!primary && "text-[#3281FF]"}`}>
        Lihat Selengkapnya
      </p>
    </div>
  );
}

BlogItem.propTypes = {
  primary: PropTypes.bool,
  tanggal: PropTypes.string,
  judul: PropTypes.string,
  isi: PropTypes.string,
};

export default BlogItem;
