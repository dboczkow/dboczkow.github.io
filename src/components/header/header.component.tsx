import './header.style.css';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import Logo from '/src/assets/MsAfro12.svg?react'
import {PiMoon, PiSun} from 'react-icons/pi';

export const Header = () => {

  const [userTheme, setUserTheme] = useLocalStorage('theme', window.matchMedia("prefers-color-scheme: dark").matches ? 'dark' : 'light');

  useEffect(() => {
    document.getElementsByTagName('body')[0].dataset.theme = userTheme;
  },[userTheme])


  const onChangeTheme = () => {
    console.log(userTheme);
    const newTheme = userTheme === 'dark' ? 'light' : 'dark';
    setUserTheme(newTheme);
  }

return (
  <div className='header'>
    <div className='logo'>
      <Logo width={64} height={64} fill="rgb(var(--text))" />
      <h1> MsAfro12</h1>
    </div>
  <div className='nav'></div>
    <div className='theme-switcher'>
      { userTheme === 'dark' ? (
          <PiMoon fill="rgb(var(--text))" onClick={onChangeTheme}/>
      ) : (
          <PiSun fill="rgb(var(--text))" onClick={onChangeTheme} />
        )}
    </div>
  </div>
)
}
