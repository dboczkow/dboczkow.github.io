'use client'
import './style.css'
import { Logo } from '@/app/components/icons/logo';
import { Switch } from '@/app/components/inputs/switch';
import { ChangeEvent } from 'react';

export const Header = () => {

  const handleOnClick = (event: ChangeEvent<HTMLInputElement>) => {
    const { classList } = document.getElementsByTagName('body')[0];
    if (event.target.checked) {
      classList.replace('light', 'dark');
    } else {
      classList.replace('dark', 'light');
    }
  }

  return (
    <div className='header'>
      <div className='logo'>
        <Logo/>
        <h1 className="header-title"> MsAfro12</h1>
      </div>
      <div className='theme-switch'>
        ☀️
        <Switch onChecked={(event) => handleOnClick(event)} />
        🌙
      </div>
    </div>
    )
}
