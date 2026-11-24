# Маршрутизация и навигация в Next.js. Layouts и Templates

Практическая работа: Next.js (App Router) + TypeScript.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000.

## Маршруты

| URL | Файл |
| --- | --- |
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[id]` | `app/blog/[id]/page.tsx` |
| `/blog/[id]/comments/[commentId]` | `app/blog/[id]/comments/[commentId]/page.tsx` |
| `/courses` | `app/courses/page.tsx` |
| `/courses/[slug]` | `app/courses/[slug]/page.tsx` |

## Layout и Template

- `app/blog/layout.tsx` — рамка раздела «Блог», не перемонтируется при переходах.
- `app/blog/template.tsx` — при каждом переходе внутри `/blog` пишет в консоль браузера
  «BlogTemplate смонтирован заново». Layout при этом не перерисовывается.
- `app/courses/layout.tsx` — layout раздела «Курсы».

## Навигация

`app/components/NavBar.tsx` — клиентский компонент: `Link`, подсветка активной ссылки через
`usePathname`, программный переход через `useRouter`.
