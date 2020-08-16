import { renderRoutes } from 'react-router-config';
import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import { UserSettings } from '../pages';
import * as menuTypes from './menuTypes';

const protectedRoutes = [
  {
    title: 'User',
    name: 'User',
    path: '/user',
    icon: 'user',
    showInMenus: [menuTypes.main],
    component: ({ route: { routes } }) => renderRoutes(routes, { routes }),
    routes: [
      {
        title: 'Settings',
        name: 'Settings',
        path: '/settings',
        showInMenus: [menuTypes.main],
        component: UserSettings,
      },
    ],
  },
];

export default createAbsoluteRoutes(protectedRoutes);
