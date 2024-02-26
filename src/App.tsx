import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PrivateRoutes from './components/guards/PrivateRoutes';

import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard';
import UserManagement from './pages/user-management';
import CreateEditUserRole from './pages/user-management/user_role/CreateEditUserRole';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/home" />
          <Route path="/user-management">
            <Route path="" element={<UserManagement />} />
            <Route path="role">
              <Route path="create" element={<CreateEditUserRole />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
