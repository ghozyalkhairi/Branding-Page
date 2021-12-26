import PropTypes from "prop-types";

function Container({ children, full = false }) {
  return (
    <div
      className={`mx-auto ${
        full ? "w-[100%]" : "container w-[80%] py-[4rem]"
      } `}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
};

export default Container;
