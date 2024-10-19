import { useState } from 'react';
import css from './interactive-button-edit.module.css';

export function InteractiveButtonEdit() {
    const [fontSize, setFontSize] = useState('16px');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [color, setColor] = useState('#000000');
    const [paddingHorizontal, setPaddingHorizontal] = useState('10px');
    const [paddingVertical, setPaddingVertical] = useState('5px');
    const [text, setText] = useState('Sample');

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '1px solid #000',
            }}
        >
            <div className={css.wrapper}>
                <div className={css.column}>
                    <label>Размер шрифта</label>
                    <input
                        min={16}
                        max={100}
                        type="range"
                        value={parseInt(fontSize)}
                        onChange={(ev) => setFontSize(ev.target.value + 'px')}
                    />
                </div>
                <div className={css.column}>
                    <label>Скругление</label>
                    <input
                        min={0}
                        max={10}
                        type="range"
                        value={parseInt(borderRadius)}
                        onChange={(ev) =>
                            setBorderRadius(ev.target.value + 'px')
                        }
                    />
                </div>
                <div className={css.column}>
                    <label>Внутренние отступы горизонтальные</label>
                    <input
                        min={0}
                        max={100}
                        type="range"
                        value={parseInt(paddingHorizontal)}
                        onChange={(ev) =>
                            setPaddingHorizontal(ev.target.value + 'px')
                        }
                    />
                </div>
                <div className={css.column}>
                    <label>Внутренние отступы вертикальные</label>
                    <input
                        min={0}
                        max={100}
                        type="range"
                        value={parseInt(paddingVertical)}
                        onChange={(ev) =>
                            setPaddingVertical(ev.target.value + 'px')
                        }
                    />
                </div>
                <div className={css.column}>
                    <label>Цвет текста</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(ev) => setColor(ev.target.value)}
                    />
                </div>
                <div className={css.column}>
                    <label>Текст</label>
                    <input
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                </div>
            </div>
            <div className={css.playground}>
                <button
                    style={{
                        fontSize,
                        borderRadius,
                        padding: `${paddingVertical} ${paddingHorizontal}`,
                        border: '1px solid black',
                        color: color,
                    }}
                >
                    {text}
                </button>
            </div>
        </div>
    );
}
