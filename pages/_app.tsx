import { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css'


export const Theme = createContext({
  darkMode: true,
  setDarkMode(val: boolean) { }
});

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <Theme.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
    </Theme.Provider>
  );
}
