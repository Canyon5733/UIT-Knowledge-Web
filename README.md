# UIT Knowledge Web

## TLDR;

- Đây là dự án trang web dành cho kênh youtube [UIT Knowledge](https://www.youtube.com/@UIT_Knowledge).

## Techstack

- [Astro](https://astro.build/) + [Svelte5](https://svelte.dev/)

- [TailwindCSS4.0](https://tailwindcss.com/docs/installation/framework-guides/astro) + [DaisyUI](https://daisyui.com/docs/install/astro/)

- [TypeScript](https://www.typescriptlang.org/)

## Chức năng chính:

- [x] : Ecommerce bán merchandises (Đang thực hiện).
- [ ] : Blog chia sẻ kiến thức, tài liệu học tập (Sẽ thực hiện).

## Cài đặt và chạy dự án

```bash
# Clone dự án
git clone https://github.com/UIT-Knowledge/UIT-Knowledge-Web.git

# Di chuyển vào thư mục dự án
cd UIT-Knowledge-Web

# Cài đặt dependencies
pnpm install

# Chạy development server
pnpm dev

# Mở http://localhost:3000 trên trình duyệt
```

## Scripts có sẵn

- `pnpm dev` - Chạy development server
- `pnpm build` - Build dự án cho production
- `pnpm preview` - Preview build production
- `pnpm lint` - Kiểm tra lỗi linting
- `pnpm format` - Format code theo chuẩn dự án

## Quy tắc phát triển

### Cấu trúc file

```
UIT-Knowledge-Web/
├── 📁 src/                          # Source code chính
│   ├── 📁 components/               # Components tái sử dụng
│   ├── 📁 layouts/                 # Layout templates
│   ├── 📁 lib/                     # Utilities và constants
│   ├── 📁 pages/                   # Pages (routing)
│   └── 📁 styles/                  # Global styles
├── 📁 public/                      # Static assets
├── 📁 .github/                     # GitHub workflows & templates
├── 📄 astro.config.ts              # Astro configuration
├── 📄 svelte.config.js             # Svelte configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 package.json                 # Dependencies & scripts
├── 📄 pnpm-workspace.yaml          # pnpm workspace config
└── 📄 README.md                    # Project documentation
```

**Quy tắc đặt tên:**

- **Trang và components tĩnh**: Sử dụng `.astro`
- **Components tương tác**: Sử dụng `.svelte`
- **Đặt tên file**: Chữ thường và dấu gạch nối (ví dụ: `button.svelte`, `navbar-button.svelte`)
- **Import**: Sử dụng `@/` aliases (ví dụ: `import { hello } from "@/lib/world"`)

### Code style

- Tuân thủ ESLint rules
- Giữ tính nhất quán trong toàn bộ mã nguồn
