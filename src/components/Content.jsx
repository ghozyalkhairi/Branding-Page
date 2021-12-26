import PropTypes from "prop-types";
function Content({ children }) {
  return <div className="flex flex-col gap-[3rem] py-[4rem]">{children}</div>;
}

Content.propTypes = { children: PropTypes.node.isRequired };

export default Content;
