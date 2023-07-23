import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const links = [
    { title: "About Us", link: "/about" },
    { title: "Courses & Admission", link: "/courses" },
    { title: "Academics", link: "/academics" },
    { title: "Student Support", link: "/support" },
    { title: "IQAC", link: "/iqac" },
    { title: "Alumni", link: "/alumni" },
    // { title: 'More', link: '/more' },
  ];

  return (
    <header className="p-2 ">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <img
              src="https://xaviers.ac/____impro/1/onewebmedia/Crest.png"
              alt=""
              className="h-10 w-full"
            />
          </div>
          <nav className="hidden md:flex space-x-4 ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-lg hover:underline bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg  text-opacity-75 group-hover:text-opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt bg-clip-text text-transparent"
              >
                <span className=" group-hover:text-gray-100 transition duration-200">
                  {link.title}
                </span>
              </a>
            ))}
            <div className=" inline-block text-left">
              <button
                type="button"
                className="text-white hover:underline focus:outline-none"
                onClick={toggleDropdown}
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute h-56 z-20 w-48 right-20 top-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {links.map((link, index) => (
                      <a
                        key={index}
                        href={link.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
          <nav className="flex md:hidden space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
