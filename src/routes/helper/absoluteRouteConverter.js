import join from 'url-join';
import withHelmet from '../withHelmet';

const DEFAULT_ABSOLUTE_PATH = '/';

export const createAbsoluteRoute = (
  absolutePath = DEFAULT_ABSOLUTE_PATH,
  { routes, component, showInMenus = [], path = '', ...route }
) => {
  const newAbsolutePath = join(absolutePath, path);

  return {
    // If we don't have child routes, it should try to match exact routes.
    // Otherwise it shouldn't. But you can override it in your route. :)
    exact: !routes,
    ...route,
    path: newAbsolutePath,
    // eslint-disable-next-line
    routes: routes && createAbsoluteRoutes(routes, newAbsolutePath),
    component: withHelmet(component),
    isRoot: !path,
    showInMenus
  };
};

export const createAbsoluteRoutes = (
  relativeRoutes = [],
  absolutePath = DEFAULT_ABSOLUTE_PATH
) => relativeRoutes.map(createAbsoluteRoute.bind(null, absolutePath));
