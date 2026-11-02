// src/routes/ProtectedRoute.jsx
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROLE_HOME } from '../constants/roles';

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { user, isAuthenticated } = useAuth();

  // TODO: nếu chưa đăng nhập -> Navigate /login; nếu sai vai trò -> Navigate ROLE_HOME[user.vaiTro]
  // Hiện tại chỉ bọc <Outlet/> để sẵn sàng kích hoạt phân quyền khi nối logic thật:
  /*
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.vaiTro)) {
    return <Navigate to={ROLE_HOME[user?.vaiTro] || '/'} replace />;
  }
  */

  return <Outlet />;
}
