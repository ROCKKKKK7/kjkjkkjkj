// app/courses/[slug]/page.tsx
import Link from 'next/link';
import { courses } from '../data';

interface CoursePageProps {
    params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return (
            <div>
                <h1>Курс не найден</h1>
                <p>Курса «{slug}» не существует.</p>
                <Link href="/courses">← Ко всем курсам</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>Длительность: {course.hours} ч.</p>
            <Link href="/courses">← Ко всем курсам</Link>
        </div>
    );
}
