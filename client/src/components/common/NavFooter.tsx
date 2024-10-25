import { NAVLINK } from '../../config/configNavbar';
import { NavLink } from 'react-router-dom';
import '../../assets/css/NavFooter.css'; 

export default function NavFooter() {
  return (
    <footer className="bg-white/50 h-20 flex items-center justify-center rounded-lg drop-shadow-lg">
      <ul className="flex">
        {Object.values(NAVLINK).map((navlink) => (
          <NavLink key={navlink.id} to={navlink.path} className="mx-4">
            <div className="icon-wrapper">
              <img src={navlink.icon} alt="icon" className="link_hover w-10 h-10" />
            </div>
          </NavLink>
        ))}
      </ul>
    </footer>
  );
}
