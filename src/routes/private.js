import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import Pie from '../components/graphs/ResponsivePie';
import { UserProfile, UserSettings, Tables } from '../pages';
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
        component: Pie,
      },
    ]
  },
  {
    title: 'UI Kit',
    name: 'UI kit',
    path: '/ui-kit',
    icon: 'code',
    showInMenus: [menuTypes.main],
    component: ({ route: { routes } }) => renderRoutes(routes, { routes }),
    routes: [
      {
        title: 'Tables',
        name: 'tables',
        path: '/tables',
        showInMenus: [menuTypes.main],
        component: Tables,
      },
    ]
  },
];

export default createAbsoluteRoutes(protectedRoutes);
