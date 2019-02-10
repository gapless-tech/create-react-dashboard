import { createAbsoluteRoutes } from './helper/absoluteRouteConverter';
import Pie from '../components/graphs/ResponsivePie';
import * as menuTypes from './menuTypes';
import { renderRoutes } from 'react-router-config';

const protectedRoutes = [
  // This is an example of nested route that will be represented as a nested menu as well
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
];

export default createAbsoluteRoutes(protectedRoutes);
