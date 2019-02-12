export const main = 'MAIN';

export const filterByType = (routes, menuType) =>
    routes.filter(({ showInMenus = [] }) => showInMenus.includes(menuType));