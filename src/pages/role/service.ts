import { request } from '../../http/request';

const getRoles = () => {
  return request.get('/role');
};

export { getRoles };
