import { useState } from 'react';
import css from './style.module.css';

export function PositionNew() {
    const [selectedDiv, setSelectedDiv] = useState('box7');

    function getStyle(box: string) {
        if (box === selectedDiv)
            return {
                backgroundColor: 'lightblue',
                position: 'relative' as const,
            };
    }

    function onClick(
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
        box: string
    ) {
        ev.stopPropagation();
        setSelectedDiv(box);
    }

    return (
        <div className={css.root}>
            <div style={getStyle('box1')} onClick={(ev) => onClick(ev, 'box1')}>
                <div
                    style={getStyle('box2')}
                    onClick={(ev) => onClick(ev, 'box2')}
                >
                    <div
                        style={getStyle('box3')}
                        onClick={(ev) => onClick(ev, 'box3')}
                    >
                        <div
                            style={getStyle('box4')}
                            onClick={(ev) => onClick(ev, 'box4')}
                        >
                            <div
                                style={getStyle('box5')}
                                onClick={(ev) => onClick(ev, 'box5')}
                            >
                                <div
                                    style={getStyle('box6')}
                                    onClick={(ev) => onClick(ev, 'box6')}
                                >
                                    <div
                                        style={getStyle('box7')}
                                        onClick={(ev) => onClick(ev, 'box7')}
                                    >
                                        <div
                                            style={getStyle('box8')}
                                            onClick={(ev) =>
                                                onClick(ev, 'box8')
                                            }
                                        >
                                            <div
                                                style={getStyle('box9')}
                                                onClick={(ev) =>
                                                    onClick(ev, 'box9')
                                                }
                                            >
                                                <div
                                                    style={getStyle('box10')}
                                                    onClick={(ev) =>
                                                        onClick(ev, 'box10')
                                                    }
                                                >
                                                    <button
                                                        className={css.absolute}
                                                    >
                                                        Нажми на меня
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
