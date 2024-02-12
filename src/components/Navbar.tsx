import { Link } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import { useUserContext } from "../providers/UserProvider";
import { DesktopCart } from "./DesktopCart";
import { User } from "lucide-react";

export const Navbar = () => {
  const user = useUserContext();

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const linkHover =
    "relative w-fit block after:block after:content-[''] after:absolute after:w-full after:h-[1px] mx-3 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center";

  return (
    <nav className="w-full flex items-center justify-between lg:px-60  mx-auto p-2 fixed top-0  z-30 bg-[#ffffff3f] backdrop-blur-lg text-black  ">
      <MobileNavbar />

      <Link
        to={"/"}
        className="hidden lg:flex items-center gap-4 text-xl font-bold font-mono  "
      >
        <img
          src="https://outletzone7.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
          alt="outletzone logo"
          className="mx-auto w-12 rounded-lg "
        />
        <p>Outlet Zone</p>
      </Link>

      <div className="navbar-center justify-between hidden lg:flex   ">
        <ul className="menu menu-horizontal items-center px-1 uppercase text-sm">
          <Link to={"/"} className={linkHover}>
            <li>Inicio</li>
          </Link>
          <Link to={"/outletzone/tienda"} className={linkHover}>
            <li tabIndex={2}>Tienda</li>
          </Link>
          {user ? (
            <div className="flex items-center gap-3 normal-case">
              <div className="dropdown dropdown-end  ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:text-yellow-500 duration-200"
                >
                  <User />
                </div>
                <ul className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button>{user.role}</button>
                  </li>
                  {user.role === "DEV" ? (
                    <li>
                      <Link to={"/outletzone/dev/registerRequests"}>
                        Register requests
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <button onClick={logOut}>Log out</button>
                  </li>
                  {user.role === "ADMIN" || "DEV" ? (
                    <li>
                      <Link to={"/outletzone/admin/añadir-producto"}>
                        Añadir un producto
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex ">
            {" "}
            <DesktopCart />
            <Link
              to={"/outletzone/contacto"}
              className="btn ml-4 my-0 bg-yellow-400  border-none text-white"
            >
              <li className="my-0">Contáctanos</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};
