import { NavLink } from "react-router-dom";
import { NAVLINK } from "../../config/configNavbar";
import { constant } from "../../config/constant";


export default function Navbar() {

  const title = constant.APP_NAME;
  const split_title = title.split(" ");


  return (
    <nav className="bg-white/50">
      <div className="flex flex-col h-20 justify-between sm:items-center sm:flex-row">
        <div className="flex-grow text-center sm:text-left sm:ml-2 my-4">
          <label className="text-xl font-bold font-poppins tracking-tighter">
            <span className="text-4xl">{split_title[0]}</span><span className="">{split_title[1]}</span>
          </label>
        </div>

        <div className="hidden sm:block">
          <ul className="flex items-center">
            {Object.values(NAVLINK).map((navlink) => (
              <NavLink key={navlink.id} to={navlink.path} className="mx-4">
                <img src={navlink.icon} alt="icon" className="w-10 h-10" />
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
