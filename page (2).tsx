// app/blog/[id]/page.tsx
import Link from 'next/link';

interface PostPageProps {
    params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    return (
        <div>
            <h1>Пост №{id}</h1>
            <p>Это содержимое поста с идентификатором {id}.</p>
            <p>
                <Link href={`/blog/${id}/comments/5`}>Перейти к комментарию 5</Link>
            </p>
        </div>
    );
}
