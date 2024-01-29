import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './Header';
import Home from '@/pages/Home';
import Favorites from '@/pages/Favorites';
import Detail from '@/pages/Detail';
import NoMatch from '@/pages/NoMatch';
import Error from '@/pages/Error';


const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary fallback={<Error />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Layout;