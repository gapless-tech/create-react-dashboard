import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import { UserProfile, UserSettings, Bars } from '../pages';
import { Pies, Bars } from '../pages/index';
import * as menuTypes from './menuTypes';
import { renderRoutes } from 'react-router-config';

const protectedRoutes = [
  // This is an example of nested route that will be represented as a nested menu as well
  {
    title: 'User',
    name: 'User',
    path: '/user',
    icon: 'user',
    showInMenus: [menuTypes.main],
    component: ({ route: { routes } }) => renderRoutes(routes, { routes }),
    routes: [
      {
        title: 'Profile',
        name: 'Profile',
        path: '/profile',
        showInMenus: [menuTypes.main],
        component: UserProfile,
      },
      {
        title: 'Settings',
        name: 'Settings',
        path: '/settings',
        showInMenus: [menuTypes.main],
        component: UserSettings,
      },
    ]
  },
  {
    title: 'Charts',
    name: 'charts',
    path: '/charts',
    icon: 'area-chart',
    showInMenus: [menuTypes.main],
    component: ({ route: { routes } }) => renderRoutes(routes, { routes }),
    routes: [
      {
        title: 'Pie chart',
        name: 'pie-chart',
        path: '/pie',
        showInMenus: [menuTypes.main],
        component: Pies,
      },
      {
        title: 'Bar Chart',
        name: 'bar-chart',
        path: '/bar',
        showInMenus: [menuTypes.main],
        component: Bars
      }
    ]
  },
];

export default createAbsoluteRoutes(protectedRoutes);
