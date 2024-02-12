import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="footer footer-center py-8 bg-[#090809] relative z-50">
      <nav className="grid grid-flow-col gap-4">
        <ul className="list-none gap-8">
          <li>
            <img
              src="https://outletzone7.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
              alt="outletzone logo"
              className="mx-auto "
            />
          </li>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.tiktok.com/@outletzonecolombia"
            className="hover:scale-105 hover:cursor-pointer duration-300"
          >
            <FaTiktok size={22} />
          </a>
          <a
            className="hover:scale-105 hover:cursor-pointer duration-300"
            href="https://wa.link/z109k4"
          >
            <IoLogoWhatsapp size={22} />
          </a>
          <a
            className="hover:scale-105 hover:cursor-pointer duration-300"
            href="https://www.instagram.com/outletzonecolombia/"
          >
            <RiInstagramFill size={22} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - Todos los derechos reservados por Outlet Zone</p>
      </aside>
    </footer>
  );
};
