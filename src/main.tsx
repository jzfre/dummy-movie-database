import ReactDOM from 'react-dom/client';

import App from './App.tsx';

const rootElem = document.getElementById('root');
if (rootElem) {
  ReactDOM.createRoot(rootElem).render(<App />);
}
