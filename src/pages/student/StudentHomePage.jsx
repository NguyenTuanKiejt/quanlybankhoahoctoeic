import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut, Construction } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function StudentHomePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col">
      {/* Header đơn giản */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-none text-slate-900 dark:text-white">TOEIC Master</h1>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase">Cổng học viên</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{user?.hoTen || 'Học viên'}</p>
            <p className="text-[11px] text-slate-400">{user?.email || 'student@toeicmaster.vn'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-4 h-4 text-slate-500" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </header>

      {/* Nội dung tạm */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
            <Construction className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Trang chủ học viên (đang xây dựng)
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            Khu vực học tập, luyện đề thi thử ETS và theo dõi tiến độ cá nhân hóa dành riêng cho học viên đang được phát triển.
          </p>
          <button
            onClick={handleLogout}
            className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất về trang đăng nhập</span>
          </button>
        </div>
      </main>
    </div>
  );
}
