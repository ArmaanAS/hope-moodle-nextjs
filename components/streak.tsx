import { useContext } from "react";
import { Theme } from "../pages/_app";
import streakLight from "../public/light_streak.webp";
import streakDark from "../public/dark_streak.webp";
import Image from "next/image";

export default function Streak() {
  const { darkMode } = useContext(Theme);

  return (
    <div className="fixed">
      <Image
        src={darkMode ? streakDark : streakLight}
        alt="background design streak" />
    </div>
  );
}