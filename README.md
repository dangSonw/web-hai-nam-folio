# Hải Nam Folio — React + Vite

Trang Home, Engineering, Community, Research và Hobby được dựng từ thiết kế Figma Desktop, tuân theo `../RULE.md`.

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
│       ├── engineering/       # 9 ảnh xuất từ layer gốc ở 2×
│       ├── community/         # 10 ảnh xuất từ layer gốc ở 2×
│       ├── research/          # 8 ảnh xuất từ layer gốc ở 2×
│       └── fonts/
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── SidebarNav.jsx
    │   ├── SidebarNav.css
    │   ├── PortfolioHero.jsx
    │   ├── PortfolioHero.css
    │   ├── SubpageLayout.jsx
    │   └── SubpageLayout.css
    └── pages/
        ├── Home.jsx
        ├── Home.css
        ├── Engineering.jsx
        ├── Engineering.css
        ├── Community.jsx
        ├── Community.css
        ├── Research.jsx
        ├── Research.css
        ├── Hobby.jsx
        └── Hobby.css
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

Menu Engineering, Community, Research và Hobby chuyển tới `/engineering`, `/community`, `/research` và `/hobby` bằng React Router, có `aria-current` khi đang ở trang tương ứng. Bấm tên Do Hai Nam để quay về Home. Chuyển trang cross-fade 0.22 giây, đưa vị trí cuộn về đầu trang và tôn trọng thiết lập giảm chuyển động. Reload hoặc mở trực tiếp URL nhánh vẫn trở về Home theo RULE.md.

Engineering dùng `SubpageLayout` và CSS prefix `.engineering-page`, gồm VEX IQ Team 25812M, Conrad Challenge, Early Fire Detection IOT và Storm Warning App. Node nguồn `15:2` có kích thước 1440 × 4207. Chín ảnh trong `public/assets/engineering/` được xuất trực tiếp từ các Rectangle `15:36`, `15:37`, `15:38`, `15:48`, `15:49`, `15:50`, `15:59`, `43:3`, `43:6` ở 2×, giữ crop và tỷ lệ riêng của từng ảnh. Robot dùng lại asset Home vì hai layer có cùng image fill. Font 42dot Sans Light được lưu cục bộ ở dạng WOFF2 Latin từ Google Fonts, kèm giấy phép OFL.

Tablet giữ gallery VEX/Conrad ba cột và ảnh Storm hai cột; mobile ≤600 px xếp dọc. Engineering là trang nội dung tĩnh trong Figma, không có video hoặc carousel.

Community dùng `SubpageLayout` và CSS prefix `.community-page`, gồm Gart Camp, VEX IQ Mentor, STEMINA và Amstro’s Gallery. Node nguồn `15:87` có kích thước 1440 × 3982. Mười ảnh trong `public/assets/community/` xuất trực tiếp từ Rectangle `15:117`, `15:121`, `15:125`, `15:116`, `15:120`, `15:124`, `15:118`, `15:122`, `15:126`, `15:119` ở 2×. Ba phần đầu dùng gallery ba ảnh; Amstro’s Gallery dùng ảnh lớn 957 × 545 theo thiết kế. Giữ nguyên hai đoạn văn của STEMINA. Font và robot dùng lại asset đã có. Tablet giữ ba cột ảnh, mobile ≤600 px chuyển thành một cột.

Menu Group 1 trong `SubpageLayout` đi theo khi cuộn: desktop nằm trong cột phải và dừng cách đầu màn hình 24 px; tablet/mobile là thanh menu bám đầu màn hình. Menu Home vẫn ở vị trí ban đầu trong hero và cuộn ra khỏi màn hình cùng hero. Dải tiêu đề giữ chiều cao gốc 65 px tại canvas 1440 px; chữ nằm trên lớp đường kẻ và được phép vẽ tràn theo chiều dọc để hiện đủ đuôi chữ g. Chỉ phần tràn ngang của tiêu đề lặp được cắt.

## Kiểm tra

- `npm install`: thành công, audit không báo lỗ hổng.
- `npm run build`: thành công, không có lỗi hoặc cảnh báo đóng gói.
- DevTools tại 375, 390, 768, 1440, 1920, 2560 và 3840 px: không tràn ngang; ảnh tải đủ và giữ tỷ lệ, vùng bấm menu đạt ít nhất 44 px.
- Quan sát trực quan mobile, tablet, desktop và 4K.
- HMR cập nhật Home mà không reload tài liệu hoặc phát sinh lỗi.
- Mở trực tiếp URL nhánh và reload đều đưa về Home; Tab → Enter ở skip link chuyển focus tới About Me.
- Engineering, Community, Research và Hobby chuyển bằng SPA trong cùng tab.
- Console không có lỗi/cảnh báo; ảnh, font và module trả về HTTP 200.
- Production preview ở cổng 5177 tải bản build thành công; URL nhánh vẫn đưa về Home, ảnh/font tải đủ, console không có lỗi. Tài nguyên đã cache trả HTTP 304.
- Engineering: kiểm tra tại 375, 390, 768, 1200, 1440, 1920, 2560 và 3840 px; không tràn ngang, đủ chín ảnh, tỷ lệ render khớp asset gốc. Vị trí đường kẻ và các khối nội dung giữ đúng thiết kế nguồn.
- Home → Engineering → Home và nút Back giữ nguyên tài liệu, cuộn về đầu; `aria-current` hoạt động. Skip link Engineering chuyển focus tới `#projects`. HMR giữ phiên hiện tại; reload Engineering hoặc mở URL trực tiếp đều reset về Home.
- Production Engineering: build thành công, console sạch, font WOFF2 tải HTTP 200, ảnh tải HTTP 200/304, desktop và mobile hiển thị đầy đủ.
- Sau sửa tiêu đề/menu: kiểm tra lại 375, 768, 1440, 1920, 2560 và 3840 px, bao gồm cuộn giữa và cuối trang. Nét chữ không bị cắt theo chiều dọc; đường kẻ giữ vị trí gốc, chữ nằm trên lớp đường kẻ. Menu trang con vẫn thấy và bấm được, menu Home giữ hành vi cũ. HMR không mất phiên, chuyển SPA và reload vẫn đúng quy tắc.
- Community: kiểm tra 375, 390, 768, 1440, 1920, 2560 và 3840 px; đủ mười ảnh, đúng tỷ lệ, không tràn ngang. Cả mười ảnh ở canvas 1440 px khớp vị trí/kích thước layer nguồn trong sai số dưới 1 px; chiều cao trang khớp 3982 px. Chuyển Home → Community → Engineering → Community → Home giữ nguyên tài liệu, trạng thái active đổi đúng. Menu vẫn thấy khi cuộn giữa/cuối trang. HMR giữ route và phiên; reload/mở URL trực tiếp về Home. Build thành công, console và network không có lỗi.

Research dùng `SubpageLayout` và CSS prefix `.research-page`, gồm VEX IQ Physics Education Initiative, Vinschool Innovation and Research Challenge, AI for Medical Diagnosis và Smart Fridge Camera. Frame nguồn `15:153` có kích thước 1440 × 4144. Tám ảnh trong `public/assets/research/` xuất từ các Rectangle `15:182`, `15:186`, `15:190`, `15:183`, `15:187`, `15:191`, `43:8`, `15:185` ở 2×; hai ảnh cuối giữ cả bóng ngoài khung của Figma. Tablet giữ gallery ba cột, mobile ≤600 px xếp dọc.

Research đã kiểm tra tại 375, 390, 768, 1440, 1920, 2560 và 3840 px: không tràn ngang, đủ tám ảnh và đúng tỷ lệ. Tại canvas 1440 px, vị trí/kích thước ảnh khớp thiết kế trong sai số dưới 1 px, chiều cao trang 4144 px. Menu hoạt động khi cuộn giữa/cuối; HMR giữ route và tài liệu; reload và URL nhánh trực tiếp về Home. Chuyển SPA, Back, trạng thái active và skip link bằng bàn phím hoạt động; console/network không có lỗi, build thành công.

Hobby dùng `SubpageLayout` và CSS prefix `.hobby-page`, gồm Basketball, Manga, Boardgame, Figure collecting và Video games. Frame nguồn `45:2` có kích thước 1440 × 2078. Dải tiêu đề gồm một chữ đen và hai chữ viền; giữ đường kẻ gốc và hiện đủ đuôi chữ y. Robot `45:26` có cùng image fill và kích thước với `1:6`, nên dùng lại asset Home. Trang không có ảnh riêng hoặc tương tác bổ sung trong Figma.

Hobby đã kiểm tra tại 375, 390, 768, 1440, 1920, 2560 và 3840 px: không tràn ngang, nội dung chữ hiện đầy đủ. Các khối nội dung ở canvas 1440 px khớp vị trí/kích thước nguồn trong sai số dưới 1 px; chiều cao trang khớp 2078 px. Menu khi cuộn, chuyển SPA, Back, trạng thái active, skip link bằng bàn phím, HMR và quy tắc F5/URL trực tiếp đều đạt. Console/network không có lỗi; build thành công.
