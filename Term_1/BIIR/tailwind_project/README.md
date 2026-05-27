# Tailwind CSS — Clean Paper Slideshow

Slideshow dạy học Tailwind: **một slide / một card**, nội dung kèm **ví dụ code production** (JSX, CSS, terminal).

## Template: Clean Paper

- Nền `#F7F6F2`, card trắng, viền `#E5E1D8`
- Accent xanh `#2563EB` — không gradient, không neon
- Code block nền `#F3F4F6`, speaker note `#FFF8DB`
- Font: system-ui + monospace cho code

## Chạy

```bash
cd tailwind_project
npm install
npm run dev
```

## Điều hướng

| Phím / thao tác | Hành vi |
|-----------------|---------|
| Tiếp / Trước | Nút dưới màn hình |
| → ← Space | Chuyển slide |
| O | Mục lục |
| Vuốt | Mobile |

## Cấu trúc

```
src/
├── components/deck/     # SlideDeck, SlideFrame
├── components/ui/       # CodeBlock, InlineCode, SpeakerNote, SlideSplit, Tabs
├── slides/              # ~23 slides + registry
└── data/                # painPoints (+ tailwindFix), popularity (+ codeExample), prosCons
```

## UI dạy học

- **SlideSplit** — giải thích trái, code phải
- **SpeakerNote** — ghi chú giảng viên (vàng nhạt)
- **InlineCode** — class utility trong câu (`p-4`, `dark:`)

Mỗi slide concept có ít nhất một khối code hiển thị trên màn 1080p.
