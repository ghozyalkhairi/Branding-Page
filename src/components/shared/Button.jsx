import PropTypes from "prop-types";

function Button({ teks }) {
  return (
    <div className="bg-[#3281FF] font-semibold hover:opacity-70 cursor-pointer text-white py-2 px-3 rounded-xl self-center ">
      {teks}
    </div>
  );
}

Button.propTypes = {
  teks: PropTypes.string,
};

export default Button;
