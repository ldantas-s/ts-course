import React from 'react';
import ReactDOM from 'react-dom/client';

import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <>
      <h1>Hi o/</h1>
      <UserSearch />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
