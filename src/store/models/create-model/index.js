import createInitialState from './createInitialState';
import createReducers from './createReducers';
import createEffects from './createEffects';
import createSelectors from './createSelectors';

const DEFAULT_PAGE_SIZE = process.env.REACT_APP_DEFAULT_PAGE_SIZE;

export default (
  modelName,
  api,
  {
    listNames = ['allIds'],
    initialState,
    reducers,
    effects,
    selectors,
    pageSize = DEFAULT_PAGE_SIZE
  } = {}
) => ({
  state: createInitialState(listNames, initialState),
  reducers: createReducers(listNames[0], reducers),
  effects: createEffects(modelName, listNames[0], api, pageSize, effects),
  selectors: createSelectors(modelName, listNames[0], selectors)
});
