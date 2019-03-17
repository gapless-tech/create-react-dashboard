export default (listNames, initialState) => ({
  byId: {},
  pagination: {},
  ...listNames.reduce((acc, listName) => ({ ...acc, [listName]: [] }), {}),
  ...initialState
});
