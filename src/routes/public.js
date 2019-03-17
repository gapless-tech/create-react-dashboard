import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import * as menuTypes from './menuTypes';
import { Home, Structure } from '../pages';

const publicRoutes = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    path: '/',
    component: Home,
    showInMenus: [menuTypes.main]
  },
  {
    name: 'structure',
    title: 'Structure',
    path: '/structure/:id',
    component: Structure
  }
];

export default createAbsoluteRoutes(publicRoutes);
