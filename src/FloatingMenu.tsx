import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="relative">
        {/* Hamburger icon */}
        <button
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg border">
            <nav className="flex flex-col divide-y text-left min-w-[9rem]">
              <Link
                to="/"
                className="text-gray-500 hover:text-blue-500 px-4 py-2"
                onClick={() => setOpen(false)}
              >
                Info
              </Link>
              <Link
                to="/osa"
                className="text-gray-500 hover:text-blue-500 px-4 py-2"
                onClick={() => setOpen(false)}
              >
                OSA
              </Link>
              <Link
                to="/faq"
                className="text-gray-500 hover:text-blue-500 px-4 py-2"
                onClick={() => setOpen(false)}
              >
                Frågor & Svar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
