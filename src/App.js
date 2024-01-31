import {BrowserRouter} from 'react-router-dom';
import {About , Contact, Experience, Education, Hero, Navbar,Tech, Works} from './components';
import { useEffect, useState } from 'react';
const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <BrowserRouter>
        <div className='relative z-0 dark:bg-primary bg-white'>
          <div className='dark:bg-hero-pattern bg-white bg-cover bg-no-repeat bg-center'>
              <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
              <Hero/>
          </div>
          <About/>
          <Education/>
          <Experience theme={theme}/>
          <Tech/>
          <Works/>
          <div className='relative z-0'>
              <Contact/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
