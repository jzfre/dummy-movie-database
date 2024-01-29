import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from '@/store';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import Favorites from '@/pages/Favorites';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:name',
    element: <Detail />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
