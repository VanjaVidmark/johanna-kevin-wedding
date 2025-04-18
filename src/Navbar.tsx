import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full lg:w-[60%] h-[7vh] bg-[#BCDDFF] text-white z-50">
      <nav className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-12 text-lg font-bold tracking-wide">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-shadow pb-0.2 border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Info
        </NavLink>
        <NavLink
          to="/osa"
          className={({ isActive }) =>
            `text-white text-shadow pb-0.2 border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          OSA
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `text-white text-shadow pb-0.2 border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Frågor & Svar
        </NavLink>
      </nav>
    </header>
  );
}
