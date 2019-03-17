import { keyBy, map } from 'lodash';

export default (defaultListName, reducers) => ({
  write: (state, { data, listName = defaultListName }) => {
    const { list, pagination } = data;

    return {
      ...state,
      byId: {
        ...state.byId,
        ...keyBy(list, 'id')
      },
      [listName]: map(list, 'id'),
      pagination: {
        ...state.pagination,
        [listName]: pagination
      }
    };
  },

  writeById: (state, { id, data } = {}) => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: data
    }
  }),

  reset: (state, { listName = defaultListName } = {}) => ({
    ...state,
    [listName]: [],
    pagination: {
      ...state.pagination,
      [listName]: null
    }
  }),

  ...reducers
});
