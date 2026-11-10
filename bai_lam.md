# BÀI LÀM – HACKATHON 02

- **Mã đề:** 01
- **Họ tên:** Lê Quang Hào 
- **Lớp:**CNTT1
- **Link repository:**
- **Hệ điều hành (Windows/macOS):**Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
ls -Recurse -force
mv ghi_chu_ban_giao.txt docs/
mkdir backup
cp data/giao_dich_thang_10.xlsx backup/
rm *.tmp
cd logs; ls; cd ..
Get-ChildItem -Recurse -Force
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text

    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026  11:27 PM                backup
d-----        11/10/2026  11:24 PM                data
d-----        11/10/2026  11:26 PM                docs
d-----        11/10/2026  11:25 PM                evidence
d-----        11/10/2026  11:25 PM                logs
d-----        11/10/2026  11:20 PM                web
-a----        11/10/2026  11:20 PM             70 .env
-a----        11/10/2026  11:20 PM           2411 bai_lam.md


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026  11:20 PM           6172 giao_dich_thang_10.xlsx


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026  11:20 PM           6172 giao_dich_thang_10.xlsx


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026  11:20 PM            152 ghi_chu_ban_giao.txt


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026  11:20 PM            983 access.log


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026  11:20 PM                images
-a----        11/10/2026  11:20 PM            621 app.js
-a----        11/10/2026  11:20 PM            580 index.html
-a----        11/10/2026  11:20 PM            460 style.css


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_03 (1)\Luyen_Tap_03\starter-kit\khach-san-may\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026  11:20 PM           3101 logo-khach-san-may.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
Get-Content logs/access.log | Select-String "status=500" | Set-Content logs/loi_500.txt
Get-Content logs/loi_500.txt -TotalCount 2
```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-10-10 08:30:42 POST /api/dat-phong status=500
2026-10-12 09:44:08 POST /phong-nghi status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
# Ghi lệnh vào đây (xoá dòng này)

```

```text
(Dán kết quả đếm vào đây – xoá dòng này)

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1
```

### Nội dung file logs/tong_hop.txt

```text
Dang tao bao cao...
Hoan thanh!
```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab phát hiện | Tên file hoặc thông báo lỗi | Cách khắc phục | 
| --- | --- | --- | --- |
| 1 | Network | Logo không tải được do sai đường dẫn ảnh | Sửa đường dẫn logo.png thành logo-san-bong.png |
| 2 | Console | Lỗi JavaScript khi tải dữ liệu bảng giá | Kiểm tra file app.js và xử lý lỗi theo thông báo |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Website GreenField gặp lỗi khi kiểm tra chức năng bảng 
- **Expected:** Bảng hiển thị đầy đủ dữ liệu từ hệ thống
- **Actual:** Bảng không hiển thị dữ liệu trên trang web
- **Log:** hàm không tồn tại 

### Câu tìm kiếm Google

```text
Bảng giá không hiển thị dữ liệu trên trang web

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/giao_dich_thang_10.xlsx`, không cần ghi vào đây.
