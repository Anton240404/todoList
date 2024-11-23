import './style.css';
import avatar from './assets/avatar.jpg';
import photo4k from './assets/photo4k.jpg';
import photo4k2 from './assets/photo4k2.jpg';
import vector from './assets/vector.svg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import cardImage from './assets/card-image.png';
import avatar4 from './assets/avatar4.png';

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

const comments: Comment[] = [comment1, comment2];

export function Project() {
    return (
        <div className="container">
            <div className="header">
                {/* Todo отступ */}
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="text">
                    <h1 className="author-header">Leslie Alexander</h1>
                    <h2 className="company">Johnson & Johnson</h2>
                </div>
            </div>
            <div className="information">
                <img className="photo-header" src={photo4k} alt={photo4k} />
                <img className="photo-header" src={photo4k2} alt={photo4k2} />
            </div>
            <div className="body-text">
                <h1 className="web-text">Web Design templates Selection</h1>
                <p className="text-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
            <div className="vector">
                <img className="heart" src={vector} alt="Vector" />
                <p className="number">34</p>
            </div>
            <textarea
                className="comment-box"
                placeholder="Write a comment"
                rows={1}
            ></textarea>
            {comments.map((comment) => (
                <div key={comment.id} className="footer-comment">
                    {/* Todo */}
                    <div className="boxProject">
                        <div>
                            <img
                                className="avatar"
                                src={comment.author.avatarUrl}
                                alt={comment.author.name}
                            />
                        </div>
                        <div className="container-small">
                            <div className="name-time">
                                <div className="author-body">
                                    {comment.author.name}
                                </div>
                                <div className="times">
                                    {comment.createdTime
                                        ? comment.createdTime.toLocaleString()
                                        : 'Unknown'}
                                </div>
                            </div>

                            <p className="text">{comment.text}</p>
                            {comment.attachmentUrl && (
                                <img
                                    className="card-image"
                                    src={comment.attachmentUrl}
                                    alt=""
                                />
                            )}
                            <div className="like-action">
                                <img className="heart" src={vector} />
                                <p className="number">{comment.likes}</p>
                                <p className="reply">Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="footer-write">
                <img className="avatar4" src={avatar4} alt={avatar4} />
                <textarea
                    className="comment-box1"
                    placeholder="Write a comment"
                    rows={1}
                ></textarea>
            </div>
        </div>
    );
}
