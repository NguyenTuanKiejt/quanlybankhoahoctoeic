# Hệ thống Quản lý Đào tạo Online TOEIC/IELTS — Admin UI

Giao diện Admin được xây dựng bằng **React 18 + Vite + Tailwind CSS v4**.

## Hướng dẫn chạy

```bash
# 1. Cài đặt dependencies (chỉ cần lần đầu)
npm install

# 2. Chạy môi trường development
npm run dev
```

Truy cập: **http://localhost:5173/**

Đăng nhập tại `/admin/login` → tự động vào `/admin` (Dashboard).

---

## Cấu trúc thư mục

```
src/
├── assets/                    # Tài nguyên tĩnh
├── components/
│   ├── ui/                    # Component nguyên tử
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Drawer.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Select.jsx
│   │   ├── Table.jsx
│   │   ├── Tabs.jsx
│   │   ├── Textarea.jsx
│   │   └── Toast.jsx
│   └── shared/                # Component dùng chung
│       ├── ConfirmDialog.jsx
│       ├── EmptyState.jsx
│       ├── PageHeader.jsx
│       ├── SearchBar.jsx
│       ├── StatCard.jsx
│       └── StatusBadge.jsx
├── constants/
│   └── enums.js               # Ánh xạ DB → tiếng Việt + màu badge
├── contexts/
│   └── ToastContext.jsx        # Global toast provider
├── hooks/
│   └── useToast.js
├── layouts/
│   ├── AdminLayout.jsx         # Layout chính (Sidebar + Topbar)
│   ├── Sidebar.jsx             # Sidebar thu gọn được
│   └── Topbar.jsx              # Breadcrumb, tìm kiếm, dark mode, thông báo
├── mock/
│   ├── dashboard.js
│   ├── courses.js
│   ├── orders.js
│   └── users.js
├── pages/admin/
│   ├── LoginPage.jsx           # /admin/login (2 cột)
│   ├── DashboardPage.jsx       # /admin (Charts + StatCards)
│   ├── UsersPage.jsx           # /admin/users
│   ├── CoursesPage.jsx         # /admin/courses
│   ├── OrdersPage.jsx          # /admin/orders
│   └── UnderConstruction.jsx   # Placeholder cho trang chưa xây dựng
├── services/
│   └── adminService.js         # Stub rỗng (TODO: nối API)
├── App.jsx                     # Router chính
├── index.css                   # Global styles + Tailwind
└── main.jsx                    # Entry point
```

## Trang đã xây dựng (Bước 1)

| Route | Trang | Trạng thái |
|-------|-------|-----------|
| `/admin/login` | Đăng nhập | ✅ Hoàn chỉnh |
| `/admin` | Dashboard | ✅ Hoàn chỉnh (charts, stats, recent orders) |
| `/admin/users` | Người dùng | ✅ Hoàn chỉnh (search, filter, modal, confirm) |
| `/admin/courses` | Khóa học | ✅ Hoàn chỉnh |
| `/admin/orders` | Đơn hàng | ✅ Hoàn chỉnh |
| Các trang còn lại | — | 🚧 Placeholder |

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v6**
- **lucide-react** — icons
- **Recharts** — charts (Dashboard)
- **Font**: Inter (Google Fonts)

## Dark Mode

Click biểu tượng 🌙/☀️ trên Topbar để chuyển dark/light mode. Trạng thái được lưu vào `localStorage`.
