import { Listbox } from "@headlessui/react";
import { readFile } from "fs/promises";
import { Params } from "next/dist/server/router";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Markdown from "../components/markdown";
import Sidenav from "../components/sidenav";
import Streak from "../components/streak";
import markdownToHtml from "../lib/markdownToHtml";


interface Props {
  content: string;
}

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const code = "CSCM043AZ2021/2";
const title = "Computational and Mathematical Methods (2021/2)";

export default function Home({ content }: Props) {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (<>
    <Streak />
    <Header />
    <div className="relative mx-8 my-12 flex gap-8 z-0">
      <Sidenav />
      <main className="flex-grow flex flex-col items-center">
        <span className="text-sm self-center leading-loose">Last updated <strong>Yesterday</strong> • 19:27</span>

        <Markdown html={content} />
      </main>
    </div>
    <Footer />
  </>);
}


export async function getStaticProps() {
  const markdown = (await readFile("markdown/home.md")).toString();
  return {
    props: {
      content: await markdownToHtml(markdown),
    }
  };
}