export default (modelName, defaultListName, selectors) => ({
  list: () => (rootState, listName = defaultListName) =>
    rootState[modelName][listName].map(id => rootState[modelName].byId[id]),
  ...selectors
});
