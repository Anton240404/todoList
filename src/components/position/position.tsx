import './style.css';
import { useState } from 'react';

type Position = 'relative' | 'absolute';

interface Positions {
    [key: string]: Position;
}

export function Position() {
    const initialPositions: Positions = {
        box1: 'relative',
        box2: 'relative',
        box3: 'relative',
        box4: 'relative',
        box5: 'relative',
        box6: 'relative',
        box7: 'relative',
        box8: 'relative',
        box9: 'relative',
        box10: 'relative',
        box11: 'relative',
        box12: 'relative',
        box13: 'relative',
        box14: 'relative',
        box15: 'relative',
        box16: 'relative',
        box17: 'relative',
        box18: 'relative',
    };

    const getBoxStyle = (boxName: keyof Positions) => ({
        position: positions[boxName],
        backgroundColor: positions[boxName] === 'absolute' ? 'blue' : 'initial',
    });
    const [positions, setPositions] = useState<Positions>(initialPositions);

    const handleClick = (boxName: keyof Positions) => {
        setPositions(
            (prevPositions) =>
                ({
                    ...prevPositions,
                    [boxName]:
                        prevPositions[boxName] === 'relative'
                            ? 'absolute'
                            : 'relative',
                }) as Positions
        );
    };

    return (
        <>
            <div className="label-container">
                <div className="square"></div>
                <h1 className="label-text"> - position: absolute</h1>
            </div>
            <div
                className="box1"
                style={{ ...getBoxStyle('box1') }}
                onClick={() => handleClick('box1')}
            >
                <div
                    className="box2"
                    style={{ ...getBoxStyle('box2') }}
                    onClick={() => handleClick('box2')}
                >
                    <div
                        className="box3"
                        style={{ ...getBoxStyle('box3') }}
                        onClick={() => handleClick('box3')}
                    ></div>
                    <div
                        className="box4"
                        style={{ ...getBoxStyle('box4') }}
                        onClick={() => handleClick('box4')}
                    ></div>
                    <div
                        className="box5"
                        style={{ ...getBoxStyle('box5') }}
                        onClick={() => handleClick('box5')}
                    ></div>
                </div>
                <div className="boxInBox">
                    <div
                        className="box6"
                        style={{ ...getBoxStyle('box6') }}
                        onClick={() => handleClick('box6')}
                    >
                        <div
                            className="box7"
                            style={{ ...getBoxStyle('box7') }}
                            onClick={() => handleClick('box7')}
                        >
                            <div
                                className="box8"
                                style={{ ...getBoxStyle('box8') }}
                                onClick={() => handleClick('box8')}
                            ></div>
                            <div
                                className="box9"
                                style={{ ...getBoxStyle('box9') }}
                                onClick={() => handleClick('box9')}
                            ></div>
                        </div>
                        <div
                            className="box10"
                            style={{ ...getBoxStyle('box10') }}
                            onClick={() => handleClick('box10')}
                        >
                            <div
                                className="box11"
                                style={{ ...getBoxStyle('box11') }}
                                onClick={() => handleClick('box11')}
                            ></div>
                            <div
                                className="box12"
                                style={{ ...getBoxStyle('box12') }}
                                onClick={() => handleClick('box12')}
                            ></div>
                            <div
                                className="box13"
                                style={{ ...getBoxStyle('box13') }}
                                onClick={() => handleClick('box13')}
                            ></div>
                        </div>
                    </div>
                    <div
                        className="box14"
                        style={{ ...getBoxStyle('box14') }}
                        onClick={() => handleClick('box14')}
                    >
                        <div
                            className="box15"
                            style={{ ...getBoxStyle('box15') }}
                            onClick={() => handleClick('box15')}
                        ></div>
                        <div className="boxColumn">
                            <div className="boxInBox2">
                                <div
                                    className="box16"
                                    style={{ ...getBoxStyle('box16') }}
                                    onClick={() => handleClick('box16')}
                                ></div>
                                <div
                                    className="box17"
                                    style={{ ...getBoxStyle('box17') }}
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        handleClick('box17');
                                    }}
                                >
                                    box17
                                </div>
                            </div>
                            <div className="boxInBox3">
                                <div
                                    className="box18"
                                    style={{ ...getBoxStyle('box18') }}
                                    onClick={() => handleClick('box18')}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
