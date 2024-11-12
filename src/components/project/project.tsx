import './style.css';
import avatar from './assets/avatar.png';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.png';
import vector from './assets/vector.svg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.png';
import cardImage from './assets/card-image.png';
import avatar4 from './assets/avatar4.png';

export function Project() {
    return (
        <div className="container">
            <div className="header">
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="text">
                    <h1 className="leslie">Leslie Alexander</h1>
                    <h2 className="johnson">Johnson & Johnson</h2>
                </div>
            </div>
            <div className="information">
                <img src={photo1} />
                <img src={photo2} />
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
                <p className="number34">34</p>
            </div>
            <textarea
                className="comment-box"
                placeholder="Write a comment"
                rows={4}
            ></textarea>

            <div className="footer-comment">
                <div className="box1">
                    <div>
                        <img className="avatar2" src={avatar2} alt={avatar} />
                    </div>
                    <div className="container-small">
                        <div className="name-time">
                            <div className="mitchell">Mitchell</div>
                            <div className="times">25 minutes ago</div>
                        </div>
                        <p className="text1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod.
                        </p>
                    </div>
                </div>
                <div className="action">
                    <div className="like-action">
                        <img className="heart" src={vector} alt="Vector" />
                        <p className="number34">18</p>
                    </div>
                    <p className="reply">Reply</p>
                </div>
            </div>

            <div className="footer-comment2">
                <div className="box2">
                    <div>
                        <img
                            className="avatar-comment"
                            src={avatar3}
                            alt={avatar}
                        />
                    </div>
                    <div className="container-small2">
                        <div className="name-times2">
                            <p className="robert-Fox">Robert Fox</p>
                            <p className="times2">3 minutes ago</p>
                        </div>
                        <div className="photo-comment">
                            <p>
                                Dolor sit ameteiusmod consectetur <br />
                                adipiscing elit.
                            </p>
                            <img
                                className="card-image"
                                src={cardImage}
                                alt={cardImage}
                            />
                        </div>
                    </div>
                </div>
                <div className="action">
                    <div className="like-action">
                        <img src={vector} alt="Vector" />
                        <p className="number34">2</p>
                    </div>
                    <p className="reply">Reply</p>
                </div>
            </div>
            <div className="footer-write">
                <img className="avatar4" src={avatar4} alt={avatar4} />
                <textarea
                    className="comment-box1"
                    placeholder="Write a comment"
                    rows={4}
                ></textarea>
            </div>
        </div>
    );
}
