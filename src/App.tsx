
import './App.css'
import { Header } from './components/header/header.component.tsx';
import { useEffect } from 'react';

function App() {

  const userTheme = localStorage.getItem('theme');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    if(userTheme && systemTheme) {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('theme')){
      const theme = document.getElementsByTagName('body');
      theme[0].dataset.theme = userTheme ? userTheme : undefined;
    }
  }, [userTheme]);

  return (
    <div className="body" >
      <Header/>
      <h1>Site is under construction 🚧</h1>
    </div>
  )
}

export default App
