# UITKnowledgeWeb

## TLDR;

- Đây là dự án trang web dành cho kênh [youtube](https://www.youtube.com/@UIT_Knowledge).

## Techstack

- [Astro](https://astro.build/) + [Svelte5](https://svelte.dev/)

- [TailwindCSS4.0](https://tailwindcss.com/docs/installation/framework-guides/astro) + [DaisyUI](https://daisyui.com/docs/install/astro/)

- [TypeScript](https://www.typescriptlang.org/)

## Chức năng chính:

- [x] : Ecommerce bán merchandises (Đang thực hiện).

- [ ] : Blog chia sẻ kiến thức, tài liệu học tập (Sẽ thực hiện).

## Hướng dẫn commit

```bash
# Clone dự án / Chỉ sử dụng 1 lần
git clone https://github.com/Canyon5733/UIT-Knowledge-Web.git

# Pull gốc dự án
git pull origin main

# Tạo branch dựa theo tên issue đang giải quyết
git checkout -b {tên_issue/[Ví dụ: issue-1]}

# Khởi tạo môi trường dev
npm run dev

# Mở localhost:3000 trên trình duyệt

# Kiểm tra lỗi
npm run lint

# Format lại mã nguồn cho đúng hình thức
npm run format

# ! Không làm theo format sẽ bị pre-commit không cho phép commit

# Thêm code đã chỉnh sửa
git add .

# Đẩy lên theo branch
git push origin {tên_issue}

# Khi trở lại code, tạo branch mới và tránh xung đột
git switch main

# Pull mã nguồn từ main
git pull origin main

# Tiếp tục vòng lặp khi quay tạo branch mới và thực hiện các thay đổi
```

> [! NOTE]
> Owner/Canyon trước khi merge các branch vào `main` để commit
> nên review code trước và call qua Discord/Messenger để
> xem kết quả dev, hỏi ý kiến của người tạo issue/branch qua inbox riêng.
>
> Và comment LGTM/Looks good to me cho pull request của contributor để
> báo trước sẽ có commit/merge.
>
> Các trang thì sử dụng `.astro`, các components thì sử dụng `.svelte`.
>
> Khi đặt tên file tránh sử dụng chữ hoa, hãy sử dụng chữ thường và dấu gạch nối,
> ví dụ: `button.svelte` hoặc `navbar-button.svelte`
> nên tránh: `Button.svelte` hoặc `NavBarButton.svelte`
> Giúp giữ tính nhất quán của toàn bộ mã nguồn
