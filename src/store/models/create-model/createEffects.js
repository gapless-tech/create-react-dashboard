export default (
  modelName,
  defaultListName,
  api,
  pageSize,
  effects
) => dispatch => {
  const ownDispatch = dispatch[modelName];

  const baseEffects = {
    async getAsync({ listName = defaultListName, ...payload } = {}) {
      const data = await api.get({ pageSize, ...payload });
      ownDispatch.write({ data, listName });
    },

    async getByIdAsync({ id }) {
      const { data } = await api.getById(id);

      ownDispatch.writeById({ id, data });
    },

    async createAsync({ data, updateList, listName }) {
      await api.post(data);

      if (updateList) {
        ownDispatch.getAsync({ listName });
      }
    },

    async updateAsync({ data, updateList, listName }) {
      await api.put(data.id, data);

      if (updateList) {
        ownDispatch.getAsync({ listName });
      }
    },

    async deleteAsync({ id, updateList, listName }) {
      await api.delete(id);

      if (updateList) {
        ownDispatch.getAsync({ listName });
      }
    }
  };

  return {
    ...baseEffects,
    ...(effects && effects(dispatch, baseEffects))
  };
};
