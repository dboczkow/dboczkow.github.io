import './header.style.css';
import { Switch } from '../inputs/switch/switch.component.tsx';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import Logo from '/public/MsAfro12.svg?react'
import { PiMoonFill, PiSunFill } from 'react-icons/pi';

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
      <Logo width={64} height={64} fill="rgb(var(--base))" />
      <h1> MsAfro12</h1>
    </div>
  <div className='nav'></div>
    <div className='theme-switcher'>
      <PiSunFill fill="rgb(var(--yellow))" />
      <Switch value={userTheme} onChange={() => onChangeTheme()} data-theme-toggle checked={userTheme === 'dark'} />
      <PiMoonFill fill="rgb(var(--lavender))"/>
    </div>
  </div>
)
}
