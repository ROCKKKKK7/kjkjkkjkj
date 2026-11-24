// app/courses/data.ts
export interface Course {
    slug: string;
    title: string;
    description: string;
    hours: number;
}

export const courses: Course[] = [
    {
        slug: 'react-basics',
        title: 'React: основы',
        description: 'Компоненты, пропсы, состояние и хуки.',
        hours: 24,
    },
    {
        slug: 'nextjs-app-router',
        title: 'Next.js App Router',
        description: 'Файловая маршрутизация, layouts, templates, серверные компоненты.',
        hours: 32,
    },
    {
        slug: 'typescript',
        title: 'TypeScript для фронтенда',
        description: 'Типизация пропсов, generics, interface и type.',
        hours: 20,
    },
];
