import React, { useState } from 'react';
import { useEffect } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};

type Props = {
    userId: number;
};

export function Test1(props: Props) {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: 'asdasdas', body: 'asdasdas' },
        { id: 2, title: 'asdasdasss', body: 'asdasdasss' },
        { id: 3, title: 'asdasdasssss', body: 'asdasdasssss' },
    ]);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newText, setNewText] = useState<string>('abc');

    // Сделать 2 инпута

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <div>{post.body}</div>
                    </div>
                );
            })}
        </div>
    );
}
