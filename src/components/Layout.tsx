import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './Header';
import Home from '@/pages/Home';
import NoMatch from '@/pages/NoMatch';
import Error from '@/pages/Error';
import MemoizedWelcomeToast from './WelcomeToast';

const Detail = lazy(() => import('@/pages/Detail'));
const Favorites = lazy(() => import('@/pages/Favorites'));

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary fallback={<Error />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Favorites />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Detail />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <MemoizedWelcomeToast />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Layout;
