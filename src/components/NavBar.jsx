import Button from "./shared/Button";
import ThemePicker from "./ThemePicker";

function NavBar() {
  return (
    <nav className="flex justify-between items-center w-[80%] mx-auto">
      <div className="text-[#3281FF] font-bold text-3xl ">Zaid.</div>
      <div className="flex flex-row gap-[3rem] items-center ">
        <a className="hover:opacity-70" href="#">
          Home
        </a>
        <a className="hover:opacity-70" href="#">
          Project
        </a>
        <a className="hover:opacity-70" href="#">
          Blogs
        </a>
        <Button teks="Kontak" />
      </div>
      <div>
        <ThemePicker />
      </div>
    </nav>
  );
}

export default NavBar;
