import style from './style.module.css';
import avatar from './assets/avatar.jpg';
import photo4k from './assets/photo4k.jpg';
import photo4k2 from './assets/photo4k2.jpg';
import vector from './assets/vector.svg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import cardImage from './assets/card-image.png';
import avatar4 from './assets/avatar4.png';
import React, { useState } from 'react';
import { uuid } from '../utils/uuid.ts';

type Comment = {
    author: {
        avatarUrl: string;
        name: string;
    };
    createdTime: Date;
    text: string;
    attachmentUrl?: string;
    likes: number;
    id: string;
};
const comment1 = {
    id: '1',
    author: {
        avatarUrl: avatar2,
        name: 'Mitchell',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    createdTime: new Date(),
    likes: 18,
};
const comment2 = {
    id: '2',
    author: {
        avatarUrl: avatar3,
        name: 'Robert Fox',
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    attachmentUrl: cardImage,
    createdTime: new Date(),
    likes: 2,
};

export function Project() {
    const [text, setText] = useState('');
    const [comments, setComments] = useState<Comment[]>([comment1, comment2]);
    const [likedComments, setLikedComments] = useState<string[]>([]);

    const addComment = (text: string) => {
        if (text.trim() !== '') {
            const newComment: Comment = {
                id: uuid(),
                author: {
                    avatarUrl: avatar4,
                    name: 'User',
                },
                text,
                createdTime: new Date(),
                likes: 0,
            };

            setComments((prevComments) => [...prevComments, newComment]);
            setText('');
        } else {
            alert('Введите правильное значение!');
        }
    };

    const deleteComment = (id: string) => {
        // Todo: отрефакторить
        setComments((prevComments) =>
            prevComments.filter((comment) => comment.id !== id)
        );
    };

    const toggleLike = (id: string) => {
        if (likedComments.includes(id)) return;

        const copy = [...comments];
        const searchElement = copy.find((comment) => comment.id === id);
        if (!searchElement) return;

        searchElement.likes += 1;
        setComments(copy);
        setLikedComments([...likedComments, id]);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addComment(text.trim());
        }
    };
    return (
        <div className={style.container}>
            <div className={style.header}>
                {/* Todo отступ */}
                <img className={style.avatar} src={avatar} alt="avatar" />
                <div className={style.text}>
                    <h1 className={style.authorHeader}>Leslie Alexander</h1>
                    <h2 className={style.company}>Johnson & Johnson</h2>
                </div>
            </div>
            <div className={style.information}>
                <img className={style.photoHeader} src={photo4k} />
                <img className={style.photoHeader} src={photo4k2} />
            </div>
            <div className={style.bodyText}>
                <h1 className={style.webText}>
                    Web Design templates Selection
                </h1>
                <p className={style.textInfo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
            <div className={style.vector}>
                <img className={style.heart} src={vector} alt="Vector" />
                <p className={style.number}>34</p>
            </div>
            <input className={style.commentBox} placeholder="Write a comment" />
            {comments.map((comment) => (
                <div key={comment.id} className={style.footerComment}>
                    {/* Todo */}
                    <div className={style.boxProject}>
                        <div>
                            <img
                                className={style.avatar}
                                src={comment.author.avatarUrl}
                                alt={comment.author.name}
                            />
                        </div>
                        <div className={style.containerSmall}>
                            <div className={style.nameTime}>
                                <div className={style.authorBody}>
                                    {comment.author.name}
                                </div>
                                <div className={style.times}>
                                    {comment.createdTime
                                        ? comment.createdTime.toLocaleString()
                                        : 'Unknown'}
                                </div>
                            </div>

                            <p className={style.text}>{comment.text}</p>
                            {comment.attachmentUrl && (
                                <img
                                    className={style.cardImage}
                                    src={comment.attachmentUrl}
                                    alt=""
                                />
                            )}
                            <div className={style.likeAction}>
                                <img
                                    className={style.heart}
                                    src={vector}
                                    alt="Like Icon"
                                />
                                <p className={style.number}>{comment.likes}</p>{' '}
                                {!likedComments.includes(comment.id) ? (
                                    <button
                                        className={style.likeButton}
                                        onClick={() => toggleLike(comment.id)}
                                    >
                                        Like
                                    </button>
                                ) : (
                                    <p className={style.liked}>Liked</p>
                                )}
                                <button
                                    className={style.deleteButton}
                                    onClick={() => deleteComment(comment.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={style.footerWrite}>
                <img className={style.avatar4} src={avatar4} alt={avatar4} />
                <input
                    className={style.commentBox1}
                    placeholder="Write a comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    type="text"
                ></input>
            </div>
        </div>
    );
}
