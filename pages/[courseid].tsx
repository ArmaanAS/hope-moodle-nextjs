import { Listbox } from "@headlessui/react";
import { readFile } from "fs/promises";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidenav from "../components/sidenav";
import markdownToHtml from "../lib/markdownToHtml";
import courses from "../data/courses.json";
import Streak from "../components/streak";
import Markdown from "../components/markdown";


interface Props {
  content: string;
  code: number;
  title: string;
}

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function Home({ content, code, title }: Props) {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (<>
    <Streak />
    <Header />
    <div className="relative mx-8 my-12 flex gap-8 z-0">
      <Sidenav />
      <main className="flex-grow flex flex-col items-center max-w-full">

        <div className="flex justify-center">
          <h2 className="uppercase font-semibold text-lg !text-sky-500 !dark:text-sky-400 tracking-wider">{code}</h2>
          {/* <Listbox
            as="div"
            className="relative"
            value={selectedPerson}
            onChange={setSelectedPerson}>
            <Listbox.Button className="text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5">
              {selectedPerson.name}
              <svg
                width="6"
                height="3"
                className="ml-2 overflow-visible"
                aria-hidden="true">
                <path
                  d="M0 0L3 3L6 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"></path>
              </svg>
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 right-0 mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-gray-900/5 text-sm leading-6 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:highlight-white/5">
              {people.map((person) => (
                <Listbox.Option
                  className="block px-3 py-1 hover:bg-gray-700 hover:text-white cursor-pointer"
                  key={person.id}
                  value={person}
                  disabled={person.unavailable}>
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox> */}
        </div>
        <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-200 tracking-tight mb-8 text-center">{title}</h1>

        <Markdown html={content} />
      </main>
    </div>
    <Footer />
  </>);
}

interface Params {
  params: {
    courseid: number;
  };
}

export async function getStaticProps({ params }: Params) {
  const markdown = (await readFile(`markdown/course-${params.courseid}.md`)).toString();
  return {
    props: {
      content: await markdownToHtml(markdown),
      title: courses[params.courseid].title,
      code: courses[params.courseid].code,
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.values(courses).map((course) => {
      return {
        params: {
          courseid: '' + course.id,
          // code: course.code,
          // title: course.title,
        },
      };
    }),
    fallback: false,
  };
}