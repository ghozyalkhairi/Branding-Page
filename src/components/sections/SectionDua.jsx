import logoKFC from "../images/kfc.png";
import logoStar from "../images/starbuck.png";
import logoAqua from "../images/aqua.png";
import logoComp from "../images/company.png";
import logoJCO from "../images/jco.png";

function SectionDua() {
  return (
    <section className="flex justify-center gap-[6rem]">
      <img src={logoKFC} alt="kfc" />
      <img src={logoStar} alt="starbucks" />
      <img src={logoAqua} alt="aqua" />
      <img src={logoComp} alt="company" />
      <img src={logoJCO} alt="jco" />
    </section>
  );
}

export default SectionDua;
