import logoLaravel from "../images/laravel.png";
import logoSQL from "../images/mysql.png";
import logoVSCODE from "../images/vscode.png";
import logoFigma from "../images/figma.png";
import logoPostman from "../images/postman.png";

function Teknologi() {
  return (
    <section className="flex flex-col gap-[2rem] font-semibold pt-[3rem] pb-[5rem]">
      <div className="flex flex-col items-center gap-[1rem]">
        <h2 className="text-4xl text-[#3281FF]">Technology & Tools</h2>
        <h3 className="text-[#B3CEF8] text-2xl">
          Teknologi dan tools yang saya gunakan dalam pembuatan website
        </h3>
      </div>
      <div className="flex justify-around py-[3rem]">
        <img src={logoLaravel} alt="laravel" />
        <img src={logoSQL} alt="mySQL" />
        <img src={logoVSCODE} alt="vscode" />
        <img src={logoFigma} alt="figma" />
        <img src={logoPostman} alt="postman" />
      </div>
    </section>
  );
}

export default Teknologi;
