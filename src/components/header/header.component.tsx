import './header.style.css';
import { Switch } from '../inputs/switch/switch.component.tsx';

export const Header = () => {
  const onChangeCookies = (value: string | undefined) => {
    if (value == 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

return (
  <div className={'header'}>
    <Switch value={localStorage.getItem('theme')} onChange={onChangeCookies} />
  </div>
)
}
