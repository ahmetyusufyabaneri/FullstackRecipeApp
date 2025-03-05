import { NavLink } from "react-router-dom";
import { links } from "../constants";

const SideBar = () => {
  return (
    <aside className="h-screen flex flex-col justify-between items-center p-3 max-md:p-2 max-md:gap-20 max-md:justify-normal">
      <img src="/logo.jpg" className="max-w-20 md:max-w-40" />
      <nav>
        {links.map((link) => (
          <NavLink
            to={link.path}
            className="flex items-center text-xl text-gray-400"
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
