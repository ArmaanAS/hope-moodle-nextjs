import { Dialog, Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import courses from "../data/courses.json";

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <button
      onClick={() => setIsOpen(true)}
      className="block lg:hidden fixed -ml-4 -mt-8 md:mt-0 p-2.5 rounded-full bg-zinc-200 dark:bg-gray-700 text-gray-100 dark:text-gray-500 shadow-md shadow-black/20 dark:highlight-white/20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>


    <Dialog
      as="div"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed flex flex-col max-w-xs inset-0 z-10 overflow-y-auto px-4 py-4 bg-gray-100 dark:bg-gray-800 !bg-opacity-[96%] backdrop-blur-sm shadow-xl shadow-black/50">
      <Dialog.Overlay />

      <button
        onClick={() => setIsOpen(false)}
        className="self-end rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <Dialog.Title className="text-center text-3xl xl:text-4xl font-bold tracking-tight mb-4">Courses</Dialog.Title>

      <ul className="flex flex-col gap-4 text-sm xl:text-base">
        {
          Object.values(courses).map(({ id, code, topics }, i) => (
            <Disclosure
              as="li"
              key={`disclosure-${i}`}
              defaultOpen
              className="flex flex-col gap-3">
              {({ open }) => (<>

                <div className="flex rounded">
                  <Link href={`/${id}`}>
                    <a>
                      <h5 className="inline-block tracking-wider dark:text-gray-300">
                        {code}
                      </h5>
                    </a>
                  </Link>

                  <Disclosure.Button
                    as="span"
                    className="flex-grow flex justify-end cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto inline h-6 w-6 transition-transform ${open && "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Disclosure.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo=""
                  leave="transition ease-in duration-100"
                  leaveFrom=""
                  leaveTo="opacity-0">
                  <Disclosure.Panel
                    as="ul"
                    className="flex flex-col leading-relaxed tracking-tight mb-6">
                    {
                      topics.map((topic, i) => (<>
                        <li
                          key={i}
                          className="border-l pl-6 pt-1.5 border-gray-400/50 dark:border-gray-600 hover:border-gray-500 hover:dark:border-gray-400 hover:text-gray-900 hover:dark:text-gray-300">
                          <Link href={topic.url}>
                            <a className="text-inherit">{topic.title}</a>
                          </Link>
                        </li>
                        {topic.divide && <div className="border-l border-gray-400/50 dark:border-gray-600">
                          <hr className="mt-4 mb-2 mr-4 ml-6 border-gray-400/50 dark:border-gray-600" />
                        </div>}
                      </>))
                    }
                  </Disclosure.Panel>
                </Transition>
              </>)}
            </Disclosure>
          ))
        }
      </ul>
    </Dialog>

    <aside className="flex-shrink-0 hidden lg:flex flex-col px-4 py-4 border-r max-w-[22rem]">
      <h4 className="text-center text-3xl xl:text-4xl font-bold tracking-tight mb-4">
        Courses
      </h4>

      <ul className="flex flex-col gap-4 text-sm xl:text-base">
        {
          Object.values(courses).map(({ id, code, topics }, i) => (
            <Disclosure
              as="li"
              key={`disclosure-${i}`}
              defaultOpen
              className="flex flex-col gap-3">
              {({ open }) => (<>

                <div className="flex rounded">
                  <Link href={`/${id}`}>
                    <a>
                      <h5 className="inline-block tracking-wider dark:text-gray-300">
                        {code}
                      </h5>
                    </a>
                  </Link>

                  <Disclosure.Button
                    as="span"
                    className="flex-grow flex justify-end cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto inline h-6 w-6 transition-transform ${open && "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Disclosure.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo=""
                  leave="transition ease-in duration-100"
                  leaveFrom=""
                  leaveTo="opacity-0">
                  <Disclosure.Panel
                    as="ul"
                    className="flex flex-col leading-relaxed tracking-tight mb-6">
                    {
                      topics.map((topic, i) => (<>
                        <li
                          key={i}
                          className="border-l pl-6 pt-1.5 hover:border-gray-500 hover:dark:border-gray-400 hover:text-gray-900 hover:dark:text-gray-300">
                          <Link href={topic.url}>
                            <a className="text-inherit">{topic.title}</a>
                          </Link>
                        </li>
                        {topic.divide && <div className="border-l">
                          <hr className="mt-4 mb-2 mr-4 ml-6" />
                        </div>}
                      </>))
                    }
                  </Disclosure.Panel>
                </Transition>
              </>)}
            </Disclosure>
          ))
        }
      </ul>
    </aside>
  </>);
}