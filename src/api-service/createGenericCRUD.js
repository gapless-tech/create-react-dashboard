import instance from './instance';

export default resourceName => ({
  get: async params => {
    const response = await instance.get(resourceName, { params });

    return response;
  },
  getById: async (id, params) => {
    const response = await instance.get(`${resourceName}/${id}`, { params });

    return response;
  },
  create: async data => {
    const response = await instance.post(resourceName, data);

    return response;
  },
  update: async (id, data) => {
    const response = await instance.put(`${resourceName}/${id}`, data);

    return response;
  },
  delete: async id => {
    const response = await instance.delete(`${resourceName}/${id}`);

    return response;
  }
});
