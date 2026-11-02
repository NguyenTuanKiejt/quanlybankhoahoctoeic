// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ROLES } from './constants/roles';
import ProtectedRoute from './routes/ProtectedRoute';

// Layouts & Authentication
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/auth/LoginPage';
import StudentHomePage from './pages/student/StudentHomePage';
import TeacherDashboardPage from './pages/teacher/TeacherDashboardPage';

// Admin Pages
import DashboardPage from './pages/admin/DashboardPage';
import UsersPage from './pages/admin/UsersPage';
import TeachersPage from './pages/admin/TeachersPage';
import CategoriesPage from './pages/admin/CategoriesPage';
import CoursesPage from './pages/admin/CoursesPage';
import CourseDetailPage from './pages/admin/CourseDetailPage';
import ClassesPage from './pages/admin/ClassesPage';
import ClassDetailPage from './pages/admin/ClassDetailPage';
import ModerationPage from './pages/admin/ModerationPage';
import OrdersPage from './pages/admin/OrdersPage';
import PaymentsPage from './pages/admin/PaymentsPage';
import RefundsPage from './pages/admin/RefundsPage';
import CouponsPage from './pages/admin/CouponsPage';
import SupportPage from './pages/admin/SupportPage';
import CertificatesPage from './pages/admin/CertificatesPage';
import ReportsPage from './pages/admin/ReportsPage';
import SettingsPage from './pages/admin/SettingsPage';
import MyNotificationsPage from './pages/admin/MyNotificationsPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Trang xác thực dùng chung tại /login (NGOÀI mọi layout) */}
          <Route path="/login" element={<LoginPage />} />

          {/* Chuyển hướng route /admin/login cũ sang /login */}
          <Route path="/admin/login" element={<Navigate to="/login" replace />} />

          {/* Mặc định khi truy cập localhost trỏ về trang đăng nhập */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Cổng học viên */}
          <Route path="/hoc-vien" element={<StudentHomePage />} />

          {/* Cổng giảng viên */}
          <Route path="/giang-vien" element={<TeacherDashboardPage />} />

          {/* Khu vực quản trị Admin - bọc ProtectedRoute (chuẩn bị sẵn để bật logic sau) */}
          <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              {/* Dashboard tổng quan */}
              <Route index element={<DashboardPage />} />

              {/* 1. Người dùng & Giáo viên */}
              <Route path="nguoi-dung" element={<UsersPage />} />
              <Route path="users" element={<Navigate to="/admin/nguoi-dung" replace />} />
              <Route path="teachers" element={<TeachersPage />} />
              <Route path="giao-vien" element={<TeachersPage />} />

              {/* 2. Đào tạo: Danh mục, Khóa học, Lớp học */}
              <Route path="danh-muc" element={<CategoriesPage />} />
              <Route path="categories" element={<Navigate to="/admin/danh-muc" replace />} />

              <Route path="khoa-hoc" element={<CoursesPage />} />
              <Route path="khoa-hoc/:id" element={<CourseDetailPage />} />
              <Route path="courses" element={<Navigate to="/admin/khoa-hoc" replace />} />

              <Route path="lop-hoc" element={<ClassesPage />} />
              <Route path="lop-hoc/:id" element={<ClassDetailPage />} />
              <Route path="classes" element={<Navigate to="/admin/lop-hoc" replace />} />

              {/* 3. Duyệt nội dung */}
              <Route path="kiem-duyet" element={<ModerationPage />} />
              <Route path="review/courses" element={<Navigate to="/admin/kiem-duyet" replace />} />
              <Route path="review/teachers" element={<Navigate to="/admin/kiem-duyet" replace />} />

              {/* 4. Kinh doanh: Đơn hàng, Thanh toán, Hoàn tiền, Mã giảm giá */}
              <Route path="don-hang" element={<OrdersPage />} />
              <Route path="orders" element={<Navigate to="/admin/don-hang" replace />} />

              <Route path="thanh-toan" element={<PaymentsPage />} />
              <Route path="payments" element={<Navigate to="/admin/thanh-toan" replace />} />

              <Route path="hoan-tien" element={<RefundsPage />} />
              <Route path="refunds" element={<Navigate to="/admin/hoan-tien" replace />} />

              <Route path="ma-giam-gia" element={<CouponsPage />} />
              <Route path="coupons" element={<Navigate to="/admin/ma-giam-gia" replace />} />

              {/* 5. Hỗ trợ & Thông báo */}
              <Route path="ho-tro" element={<SupportPage />} />
              <Route path="tickets" element={<Navigate to="/admin/ho-tro" replace />} />
              <Route path="thong-bao" element={<Navigate to="/admin/ho-tro" replace />} />
              <Route path="thong-bao-cua-toi" element={<MyNotificationsPage />} />

              {/* 6. Chứng chỉ & Đánh giá */}
              <Route path="chung-chi" element={<CertificatesPage />} />
              <Route path="certificates" element={<Navigate to="/admin/chung-chi" replace />} />

              {/* 7. Báo cáo & Thống kê */}
              <Route path="bao-cao" element={<ReportsPage />} />
              <Route path="reports" element={<Navigate to="/admin/bao-cao" replace />} />

              {/* 8. Cài đặt hệ thống */}
              <Route path="cai-dat" element={<SettingsPage />} />
              <Route path="settings" element={<Navigate to="/admin/cai-dat" replace />} />
            </Route>
          </Route>

          {/* Fallback điều hướng về /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
