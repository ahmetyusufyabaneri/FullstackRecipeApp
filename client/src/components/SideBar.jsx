import { Link, NavLink } from "react-router-dom";
import { links } from "../constants";

const SideBar = () => {
  return (
    <aside className="h-screen flex flex-col justify-between items-center p-3 max-md:p-2 max-md:gap-20 max-md:justify-normal">
      <Link to={"/"}>
        <img src="/logo.jpg" className="max-w-20 md:max-w-40" />
      </Link>
      <nav className="flex flex-col gap-20">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link?.path}
            className="flex items-center gap-4 text-xl text-gray-400"
          >
            <span className="max-md:text-2xl">{link?.icon}</span>
            <span className="max-md:hidden">{link?.title}</span>
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col gap-4 max-md:hidden">
        <p className="font-semibold">Daily News</p>
        <button className="bg-red-400 text-white p-2 rounded-lg cursor-pointer hover:bg-red-500">
          Subscribe
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
