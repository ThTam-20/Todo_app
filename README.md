# Todo App

Ứng dụng Todo full-stack: React (Vite + Tailwind) ở frontend và Node.js (Express + Mongoose) ở backend.

## Tổng quan
- **Mục đích:** Quản lý tác vụ (thêm, sửa, xóa, lọc, phân trang).
- **Kiến trúc:** Monorepo gồm hai thư mục chính: `backend` và `frontend`.

## Tech stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, Mongoose (MongoDB)

## Yêu cầu trước
- Node.js (>=16)
- npm hoặc yarn
- Một instance MongoDB (local hoặc hosted)

## Cấu hình & chạy

- Backend
  1. Vào thư mục `backend`:
     ```bash
     cd backend
     ```
  2. Cài dependencies:
     ```bash
     npm install
     ```
  3. Tạo file môi trường `.env` (nếu chưa có) và đặt biến môi trường như `MONGO_URI` và `PORT`.
  4. Chạy server trong chế độ phát triển:
     ```bash
     npm run dev
     ```

- Frontend
  1. Vào thư mục `frontend`:
     ```bash
     cd frontend
     ```
  2. Cài dependencies:
     ```bash
     npm install
     ```
  3. Chạy frontend (Vite):
     ```bash
     npm run dev
     ```

Mặc định, frontend sẽ chạy trên `http://localhost:5173` (Vite) và backend thường trên `http://localhost:5000` — điều chỉnh theo `PORT` trong `.env`.

## Biến môi trường chính (ví dụ)
- `MONGO_URI` — chuỗi kết nối MongoDB
- `PORT` — cổng server backend

## API (tổng quan)
- Các endpoint chính thường nằm dưới tiền tố `/api` (vd: `/api/tasks`) cho các thao tác CRUD trên task.
- Kiểm tra chi tiết hơn trong `backend/routes` và `backend/controllers`.

## Cấu trúc thư mục (tóm tắt)
- `backend/` — server, models, controllers, routes, cấu hình DB
- `frontend/` — mã React, components, assets

## Phát triển & đóng góp
- Làm nhánh (feature branch), commit rõ ràng, tạo PR để review.
- Viết tests nhỏ nếu thêm logic quan trọng.

## Triển khai
- Backend: deploy lên Heroku/Render/Vercel (serverless) hoặc VPS; thiết lập `MONGO_URI` production.
- Frontend: build bằng `npm run build` trong `frontend` rồi deploy lên Netlify/Vercel/Static host.

## Liên hệ
- Nếu cần thêm hướng dẫn hoặc muốn mình cập nhật README (thêm ví dụ `.env`, API docs, badges...), báo mình biết.

---
Generated: README cơ bản cho dự án Todo (Vietnamese).
