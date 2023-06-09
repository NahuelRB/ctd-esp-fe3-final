import { Navigate } from 'react-router-dom';
import { Home, Contact, Favs, Details } from '../../Routes';

export const AppRoutes = [
  {
    index: true,
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },

  {
    path: 'home',
    element: <Home />,
  },

  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'users/:id',
    element: <Details />,
  },
  {
    path: 'favs',
    element: <Favs />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },
];
