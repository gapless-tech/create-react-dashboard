import instance from './instance';

export default ({ baseURL }) => {
  instance.defaults.headers.common.Accept = 'application/json';
  instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  instance.defaults.baseURL = baseURL;
};
