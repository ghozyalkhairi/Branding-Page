import PropTypes from "prop-types";

function Button({ teks, large = false, dark = false }) {
  return (
    <div
      className={`transition ease-linear font-semibold hover:opacity-70 cursor-pointer rounded-xl self-center ${
        large ? "py-3 px-5 text-lg" : "py-2 px-3"
      } ${
        dark ? "bg-[#F2F2F2] text-[#3281FF]" : "bg-[#3281FF] text-[#F2F2F2]"
      }`}
    >
      {teks}
    </div>
  );
}

Button.propTypes = {
  teks: PropTypes.string,
  large: PropTypes.bool,
  dark: PropTypes.bool,
};

export default Button;
