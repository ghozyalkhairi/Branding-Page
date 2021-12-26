import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LogoIG from "./images/instagram.svg";
import LogoFB from "./images/facebook.svg";
import LogoGitHub from "./images/github.svg";
import LogoDribbble from "./images/dribbble.svg";
import LogoIGW from "./images/instagramwhite.svg";
import LogoFBW from "./images/facebookwhite.svg";
import LogoGitHubW from "./images/githubwhite.svg";
import LogoDribbbleW from "./images/dribbblewhite.svg";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="flex justify-between items-center text-xl">
      <div>&copy; Copyright - 2021 - Zaid - Web Developer</div>
      <div className="flex justify-between gap-6">
        <img src={theme === "light" ? LogoFB : LogoFBW} alt="facebook" />
        <img src={theme === "light" ? LogoIG : LogoIGW} alt="instagram" />
        <img src={theme === "light" ? LogoGitHub : LogoGitHubW} alt="github" />
        <img
          src={theme === "light" ? LogoDribbble : LogoDribbbleW}
          alt="dribbble"
        />
      </div>
    </footer>
  );
}

export default Footer;
