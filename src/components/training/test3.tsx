import React, {useState} from 'react';
import style from './style.module.css';

type Post = {
    id: number;
    title: string;
    body: string;
};

export function Test1() {
    const [posts, setPosts] = useState<Post[]>([
        {id: 1, title: 'Первый пост', body: 'Текст первого поста'},
        {id: 2, title: 'Второй пост', body: 'Текст второго поста'},
        {id: 3, title: 'Третий пост', body: 'Текст третьего поста'},
    ]);
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');

    const addPost = () => {
        if (!newTitle.trim() || !newText.trim()) return;

        const newPost: Post = {
            id: Date.now(),
            title: newTitle,
            body: newText,
        };
        // 6
        setPosts([...posts, newPost]);
        // setPosts(posts.push(newPost)); 2 причины
        setNewTitle('');
        setNewText('');
    };

    const deletePost = (id: number) => {
        // 4
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        // 5
        <div className={style.container}>
            <div className={style.inputContainer}>
                <input
                    type={'text'}
                    placeholder="Введите заголовок"
                    value={newTitle}
                    {/* 6 */}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={style.input}
                />
                <input
                    type={'text'}
                    placeholder="Введите текст"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className={style.input}
                />
                <button onClick={addPost} className={style.button}>
                    Добавить пост
                </button>
            </div>
            {posts.map((post) => {
                return (
                    <div className={style.post} key={post.id}>
                        <h3>{post.title}</h3>
                        <div>{post.body}</div>
                        <button
                            onClick={() => deletePost(post.id)}
                            className={style.deleteButton}
                        >
                            Удалить
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
