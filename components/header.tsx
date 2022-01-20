import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import { Theme } from "../pages/_app";
import LogoDark from "../public/logo_wide_white.webp";
import LogoLight from "../public/logo_wide.webp";
import LogoIcon from "../public/logo_icon.webp";
import LogoDarkSmall from "../public/logo_wide_white_small.webp";
import LogoLightSmall from "../public/logo_wide_small.webp";


interface Props {
  selectedLink?: string;
}

const menu = [
  { title: "Dashboard", url: "#" },
  {
    title: "View profile", url: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  },
  { title: "Edit profile", url: "#" },
  { title: "Grades", url: "#" },
  {
    title: "Preferences", url: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  },
  {
    title: "Calendar", url: "#", divide: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  },
  {
    title: "Log out", url: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  },
];

const links = [
  { title: "Home", url: "/" },
  { title: "Dashboard", url: "#" },
  { title: "Events", url: "#" },
  { title: "My courses", url: "#" },
  { title: "This Course", url: "#" },
  // { title: "Moodle 20/21", url: "#" },
];




export default function Header({ selectedLink = "Home" }: Props) {
  const { darkMode, setDarkMode } = useContext(Theme);
  const [scrolled, setScrolled] = useState(false);

  function switchTheme() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    document.addEventListener("scroll", event => {
      if (window.scrollY < 10) {
        setScrolled(false);
      } else if (!scrolled) {
        setScrolled(true);
      }
    });
  });


  return (
    // <header className={`sticky z-10 top-0 px-4 md:px-8 pt-2 gap-2 flex flex-col md:flex-row justify-between backdrop-blur-sm transition duration-500 border-b md:border-b-0 ${scrolled && "border-bx shadow-md dark:shadow-xl bg-white/30 dark:bg-gray-900/40 dark:border-b-gray-600x"}`}>
    <header className={`sticky z-10 top-0 px-4 md:px-8 pt-2 gap-2 flex flex-col md:flex-row justify-between backdrop-blur-sm transition duration-500 border-b md:border-b-0 ${scrolled && "border-bx shadow-md dark:shadow-xl bg-gradient-to-r from-transparent via-white/30 to-white/30 dark:via-gray-900/40 dark:to-gray-900/40 dark:border-b-gray-600x"}`}>
      <div className="flex-grow flex justify-between border-b md:border-b-0">

        <Logo darkMode={darkMode} />

        <Tabs selectedLink={selectedLink} scrolled={scrolled} />

        <div className={`flex self-center md:self-end items-end justify-between gap-2 pb-2 ${scrolled && 'border-b'}`}>

          <Menu as="div" className="relative">
            <Menu.Button className="flex gap-1 items-center rounded-full">
              <span className="rounded-full dark:bg-gray-700 p-0.5 dark:highlight-white/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 rounded-full"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd" />
                </svg>
              </span>
              <span className="button hidden xs:inline py-1 px-4 tracking-tight capitalize text-sm xl:text-base">
                Forename S
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">

              <Menu.Items as="ul" className="absolute z-20x mt-2 right-0 py-2 px-2 w-40 rounded-xl bg-white !bg-opacity-[96%] backdrop-blur-sm shadow-lg ring-1 ring-gray-900/5 leading-relaxed font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:highlight-white/5">
                {menu.map((item, i) =>
                  <Menu.Item
                    as="li"
                    className="text-gray-400"
                    key={i}>
                    {({ active }) => (<>
                      <Link href={item.url}>
                        <a
                          className={`flex items-center gap-1 rounded-md pl-1 !bg-opacity-75 ${active && "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}>
                          <span className="w-6 inline-block opacity-75">{item.icon}</span>
                          <span className="text-inherit">{item.title}</span>
                        </a>
                      </Link>
                      {item.divide && <hr className="mt-2 mb-1 mx-1" />}
                    </>)}
                  </Menu.Item>
                )}
              </Menu.Items>
            </Transition>
          </Menu>

          <button
            onClick={switchTheme}
            className="button rounded-lg p-1"
            title="Page Theme">
            {!darkMode ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          </button>
        </div>
      </div>

      <TabsBottom selectedLink={selectedLink} />
    </header>
  );
}



function Logo({ darkMode }: { darkMode: boolean; }) {
  return (
    <div>
      <Link href="/">
        <a className="md:-mb-8 hidden sm:block md:hidden lg:block">
          <Image
            src={darkMode ? LogoDark : LogoLight}
            alt="Hope logo"
            height={80} />
        </a>
      </Link>
      <Link href="/">
        <a className="-mb-8 hidden md:block lg:hidden">
          <Image
            src={LogoIcon}
            alt="Hope logo Icon"
            height={80} />
        </a>
      </Link>
      <Link href="/">
        <a className="block sm:hidden">
          <Image
            src={darkMode ? LogoDarkSmall : LogoLightSmall}
            alt="Hope logo"
            height={60} />
        </a>
      </Link>
    </div>
  );
}

function Tabs({ selectedLink, scrolled }) {
  return (
    <div className={`flex-grow hidden md:flex justify-center gap-4 font-medium self-end xl:text-lg tracking-tight ${scrolled && "border-b"}`}>
      {links.map((link, i) => (
        <Link href={link.url} key={i}>
          <a className={`pb-2 
              hover:text-cyan-500 dark:hover:text-gray-200 
              hover:border-b-2 hover:border-cyan-500 hover:dark:border-gray-300
              ${selectedLink == link.title && 'text-cyan-600 dark:text-gray-200 border-b-2 border-cyan-600 dark:border-gray-200'}`}>{link.title}</a>
        </Link>
      ))}
    </div>
  );
}
function TabsBottom({ selectedLink }: { selectedLink: string; }) {
  return (
    <div className="md:hidden flex gap-4 font-medium self-center xl:text-lg tracking-tight max-w-full overflow-x-auto">
      {links.map((link, i) => (
        <Link href={link.url} key={i}>
          <a className={`pb-2 whitespace-nowrap
              hover:text-cyan-500 dark:hover:text-gray-200 
              hover:border-b-2 hover:border-cyan-500 hover:dark:border-gray-300
              ${selectedLink == link.title && 'text-cyan-600 dark:text-gray-200 border-b-2 border-cyan-600 dark:border-gray-200'}`}>{link.title}</a>
        </Link>
      ))}
    </div>
  );
}

// function Menus() {
//   return ();
// }