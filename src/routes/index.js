import { Layout } from '../components/skeleton';
import privateRoutes from './private';
import publicRoutes from './public';
import { createAbsoluteRoute } from './helper/absoluteRouteConverter';

const notFoundRoute = createAbsoluteRoute(undefined, {
  path: '*',
  component: () => 'Not Found',
});

const getRoutes = ({ isLoggedUser }) => [
  {
    name: 'app',
    component: Layout,
    routes: [
      ...(isLoggedUser ? [...publicRoutes, ...privateRoutes] : publicRoutes),
      notFoundRoute,
    ],
  },
];

export default getRoutes;
