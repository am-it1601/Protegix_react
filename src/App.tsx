import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './components/guards/PrivateRoutes';
import { ThemeProvider } from './components/provider/ThemeProvider';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard';
import RootLayout from './pages/layouts/RootLayout';
import UserManagement from './pages/user-management';
import CreateEditUserRole from './pages/user-management/user_role/CreateEditUserRole';
import { CreateEditUserGroup } from './pages/user-management/user_group/CreateEditUserGroup';

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Dashboard />} path="/home" />
                        <Route path="/user-management">
                            <Route path="" element={<UserManagement />} />
                            <Route path="role">
                                <Route path="create" element={<CreateEditUserRole />} />
                            </Route>
                            <Route path="user-group">
                                <Route path="create" element={<CreateEditUserGroup />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<RootLayout />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
