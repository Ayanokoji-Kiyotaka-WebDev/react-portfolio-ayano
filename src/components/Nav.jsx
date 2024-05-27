import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function Nav() {
  return (
    <nav className= "mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img  className= "mx-2 w-10"src={logo} alt=""  />
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">   
        <FaInstagram/>
        <FaLinkedin/>
        <FaTwitterSquare/>
        <FaGithub/>
      </div>
    </nav>
  );
}

export default Nav;
