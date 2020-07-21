import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import * as menuTypes from './menuTypes';
import { Home } from '../pages';

const publicRoutes = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    path: '/',
    component: Home,
    showInMenus: [menuTypes.main]
  },
];

export default createAbsoluteRoutes(publicRoutes);
