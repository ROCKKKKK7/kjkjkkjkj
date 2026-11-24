// app/courses/page.tsx
import Link from 'next/link';
import { courses } from './data';

export default function CoursesPage() {
    return (
        <div>
            <h1>Курсы</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.slug}>
                        <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
