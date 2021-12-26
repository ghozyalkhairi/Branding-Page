import PropTypes from "prop-types";
import Container from "./Container";
function Content({ children }) {
  return (
    <Container>
      {" "}
      <div className="flex flex-col gap-[3rem] ">{children}</div>
    </Container>
  );
}

Content.propTypes = { children: PropTypes.node.isRequired };

export default Content;
