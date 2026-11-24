// app/courses/layout.tsx
import type { ReactNode } from 'react';

interface CoursesLayoutProps {
    children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
    return (
        <section style={{ border: '1px solid #4a90d9', padding: '16px', marginTop: '16px' }}>
            <h2>Раздел «Курсы»</h2>
            <p>Общий layout раздела курсов: сохраняется при переходах между курсами.</p>
            {children}
        </section>
    );
}
