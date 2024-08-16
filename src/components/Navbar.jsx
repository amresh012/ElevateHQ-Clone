import { Link } from "react-router-dom";
import { navlink } from "../constants";
import Button from './Button'
import MobileNav from "./MobileNav";

const Navbar = () => {
  let w = window.innerWidth
  return (
    <nav className="flex lg:justify-around justify-between items-center lg:px-12 px-4 py-8 bg-gradient-to-tr to-white via-purple-400/20 from-white ">
      <div className="flex items-center ">
        <Link to="/">
          <h1 className="lg:text-4xl font-bold ">
            elevate<span className=" uppercase text-purple-400">HQ</span>
          </h1>
        </Link>
      </div>
      <ul className="flex gap-8 justify-around  items-center ">
        <div className=" gap-12 hidden lg:flex">
          {navlink.map((link) => (
            <Link className="" to={link.route} key={link.label}>
              <p className="hover:text-purple-400">{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="bg-slate-900 hidden lg:flex hover:bg-slate-800 px-4 py-2  items-center justify-center">
          <Button title="Schedule demo" classname="text-white  " />
        </div>
        {w <= 500 && <MobileNav />}
      </ul>
    </nav>
  );
}

export default Navbar