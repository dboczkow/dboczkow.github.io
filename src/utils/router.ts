import { createBrowserRouter } from 'react-router';
import { HomePage } from '../pages/home.page.tsx';

export const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  ])
