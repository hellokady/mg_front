import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import RoleModule from '../pages/role';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: 'role', element: <RoleModule /> }]
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);

export { router };
