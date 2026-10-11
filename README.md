# Hải Nam Folio — React + Vite

Trang Home được dựng từ thiết kế Figma, tuân theo `../RULE.md`.

## Chạy dự án

Yêu cầu Node.js 22.12 trở lên và npm.

```powershell
cd D:\Web\web-hai-nam-folio
npm install
npm run dev
```

Mở http://localhost:5177/.

Kiểm tra bản production:

```powershell
npm run build
npm run preview
```

Preview cũng dùng http://localhost:5177/. Dừng dev server trước khi chạy preview vì cả hai dùng cùng cổng. `npm start` tương đương `npm run preview`; cần build trước.

## Cấu trúc

```text
web-hai-nam-folio/
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── public/
│   └── assets/
│       ├── home/
│       │   ├── robot.png
│       │   └── portrait.png
│       └── fonts/
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── SidebarNav.jsx
    │   └── SidebarNav.css
    └── pages/
        ├── Home.jsx
        └── Home.css
```

`index.html` là entrypoint duy nhất, chứa `#root` và nạp `src/main.jsx`. React Router được khởi tạo ở `main.jsx`; router và PageTransition dùng framer-motion ở `App.jsx`. Tải lại hoặc mở URL nhánh trực tiếp luôn đưa về `/`. CSS Home dùng prefix `.home-page`; reset, font và biến chung nằm ở `src/index.css`. Asset dùng URL tuyệt đối `/assets/...`. `dist/` là kết quả build; `dist/` và `node_modules/` không được commit.

Home giữ bố cục gốc ở kích thước desktop. Tablet đưa menu lên đầu theo hàng ngang và giữ hai cột giới thiệu; mobile đến 600 px xếp nội dung dọc. Canvas mở rộng theo `clamp(1440px, 88vw, 2560px)`, typography và ảnh co giãn theo canvas.

## Nguồn thiết kế

- File gốc: https://www.figma.com/design/AE8KY3DLT8MDHIoyOQy8HQ/Hai-Nam-Folio?node-id=1-2
- Bản sao Figma Desktop: https://www.figma.com/design/jiCmjkHEvzHQM0KF9N6gdK/Hai-Nam-Folio?node-id=1-2
- Đọc layer qua Figma Console MCP 1.40.9 và Desktop Bridge; Home `1:2`, kích thước 1440 × 1221.
- `public/assets/home/robot.png`: xuất nguyên layer `1:6` ở 2×, giữ crop và nền trong suốt.
- `public/assets/home/portrait.png`: xuất nguyên layer `1:19` ở 2×, giữ crop từ thiết kế.
- Font Orbitron Regular/Bold và Inter Regular lưu cục bộ từ Google Fonts, kèm giấy phép trong `public/assets/fonts/`.

Chỉ Home đã được triển khai. Menu hiện mở các frame Engineering, Community, Research và Hobby trên Figma; sẽ đổi sang route nội bộ khi triển khai những trang đó. Các component dành cho video, album và layout trang con được thêm khi có trang thực tế sử dụng.

## Kiểm tra

- `npm install`: thành công, audit không báo lỗ hổng.
- `npm run build`: thành công, không có lỗi hoặc cảnh báo đóng gói.
- DevTools tại 375, 390, 768, 1440, 1920, 2560 và 3840 px: không tràn ngang; ảnh tải đủ và giữ tỷ lệ, vùng bấm menu đạt ít nhất 44 px.
- Quan sát trực quan mobile, tablet, desktop và 4K.
- HMR cập nhật Home mà không reload tài liệu hoặc phát sinh lỗi.
- Mở trực tiếp URL nhánh và reload đều đưa về Home; Tab → Enter ở skip link chuyển focus tới About Me.
- Bấm cả bốn mục menu đều mở đúng frame Figma trong tab mới.
- Console không có lỗi/cảnh báo; ảnh, font và module trả về HTTP 200.
- Production preview ở cổng 5177 tải bản build thành công; URL nhánh vẫn đưa về Home, ảnh/font tải đủ, console không có lỗi. Tài nguyên đã cache trả HTTP 304.
