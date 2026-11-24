// app/blog/template.tsx
'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface BlogTemplateProps {
    children: ReactNode;
}

export default function BlogTemplate({ children }: BlogTemplateProps) {
    // Выполняется в браузере при каждом новом монтировании template,
    // то есть при каждом переходе внутри /blog — смотрите консоль браузера.
    useEffect(() => {
        console.log('BlogTemplate смонтирован заново');
    }, []);

    return <div>{children}</div>;
}
