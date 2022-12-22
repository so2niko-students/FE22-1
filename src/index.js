import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pokemon/app';
import Game from './tictactoe/game';
import {
  createBrowserRouter,
  Link,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="/">go to tic tac toe</Link>
        <Link to="/pokemon">go to Pokemon</Link>
        <Game />
      </div>
    ),
  },
  {
    path: "/pokemon",
    element: (
      <div>
        <Link to="/">go to tic tac toe</Link>
        <Link to="/pokemon">go to Pokemon</Link>
        <App />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

