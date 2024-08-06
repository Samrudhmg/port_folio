
import { FaLinkedin, FaPhone } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import portlogo from "../assets/portfolio-logo.png"
import { MdEmail } from "react-icons/md"

const Navbar = () => {
    return (
        <nav className="mb-20 lg:mb-6  flex items-center justify-between py-2">
            <div className="flex flex-shrink-0 items-center">
                <img className=" mx-2 w-[10vw] " src={portlogo} alt="logo" ></img>
            </div>
            <div className=" m-8 cursor-pointer flex items-center justify-center gap-8  text-3xl  ">
            <a id="footerem"  href="mailto:samrudhmgowda61@gmail.com"><MdEmail className="hover:text-green-500"/></a>
            <a href="https://www.linkedin.com/in/samrudh-m-gowda/"><FaLinkedin className="hover:text-green-500"/></a>
            <a href="https://github.com/Samrudhmg?tab=repositories"><FaGithub className="hover:text-green-500"/></a>
            <a href="tel:6362294354"><FaPhone className="hover:text-green-500"/></a>
            
            
            </div>
        </nav>
  )
}

export default Navbar
