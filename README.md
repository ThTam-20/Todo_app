# Todo App

Ứng dụng Todo full-stack: React (Vite + Tailwind) ở frontend và Node.js (Express + Mongoose) ở backend.

Link: https://todo-evzs.onrender.com/

## Tổng quan
- **Mục đích:** Quản lý tác vụ (thêm, sửa, xóa, lọc, phân trang).
- **Kiến trúc:** Monorepo gồm hai thư mục chính: `backend` và `frontend`.

## Tech stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, Mongoose (MongoDB)


## API (tổng quan)
- Các endpoint chính thường nằm dưới tiền tố `/api` (vd: `/api/tasks`) cho các thao tác CRUD trên task.
- Kiểm tra chi tiết hơn trong `backend/routes` và `backend/controllers`.

## Cấu trúc thư mục (tóm tắt)
- `backend/` — server, models, controllers, routes, cấu hình DB
- `frontend/` — mã React, components, assets

## Triển khai
- Backend: deploy lên Heroku/Render/Vercel (serverless) hoặc VPS; thiết lập `MONGO_URI` production.
- Frontend: build bằng `npm run build` trong `frontend` rồi deploy lên Netlify/Vercel/Static host.


