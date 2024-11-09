import './style.css';
import avatar from './assets/avatar.png';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.png';
import vector from './assets/vector.png';
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
                    <h2 className="Johnson">Johnson & Johnson</h2>
                </div>
            </div>
            <div className="information">
                <img className="foto1" src={foto1} alt="foto" />
                <img src={foto2} alt="foto2" />
            </div>
            <div className="bodyText">
                <h1 className="WebText">Web Design templates Selection</h1>
                <p className="textInfo">
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
            <div className="footer-commend">
                <img className="avatar2" src={avatar2} alt={avatar} />
                <div className="Name-minute">
                    <p className="mitchell">Mitchell</p>
                    <p className="minutes">25 minutes ago</p>
                </div>
                <text className="commend1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod.
                </text>
                <div className="heart-reply">
                    <img className="heart" src={vector} alt="Vector" />
                    <p className="number34">18</p>
                    <p className="reply">Reply</p>
                </div>
            </div>
            <div className="footer-commend2">
                <img src={avatar3} alt={avatar} />
                <div className="Name-minute2">
                    <p className="Robert-Fox">Robert Fox</p>
                    <p className="minutes2">3 minutes ago</p>
                </div>
                <div className="foto-commend">
                    <text>
                        Dolor sit ameteiusmod consectetur adipiscing elit.
                    </text>
                    <img src={cardImage} alt={cardImage} />
                </div>
                <div className="heart-reply2">
                    <img className="heart" src={vector} alt="Vector" />
                    <p className="number34">2</p>
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
