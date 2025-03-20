
import './App.css'
import { Header } from './components/header/header.component.tsx';
import { Footer } from './components/footer/footer.component.tsx';
import { RouterProvider } from 'react-router/dom';
import { router } from './utils/router.ts';

function App() {

  return (
    <div className="body" >
      <Header/>
        <RouterProvider router={router}/>
      <Footer/>
    </div>
  )
}

export default App
