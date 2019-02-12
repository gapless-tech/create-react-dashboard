import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import * as menuTypes from './menuTypes';

const publicRoutes = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    path: '/',
    component: () => 'Home Content',
    showInMenus: [menuTypes.main],
  },
];

export default createAbsoluteRoutes(publicRoutes);
