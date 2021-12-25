import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./shared/Button";

function Kontak() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between items-center ">
      <h2 className="text-2xl font-semibold">
        Tertarik untuk membuat website? Hubungi saya sekarang.
      </h2>
      <Button
        large
        dark={theme === "light" ? false : true}
        teks="Hubungi Saya"
      />
    </div>
  );
}

export default Kontak;
