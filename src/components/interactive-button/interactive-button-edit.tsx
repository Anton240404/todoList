import { useState } from 'react';
import css from './interactive-button-edit.module.css';
import { FontSize } from './range-components/font-size.tsx';
import { BorderRadius } from './range-components/border-radius.tsx';
import { PaddingHorizontal } from './range-components/padding-horizontal.tsx';
import { PaddingVertical } from './range-components/padding-vertical.tsx';
import { Color } from './range-components/color.tsx';
import { Text } from './range-components/text.tsx';
import { FontWeight } from './range-components/font-weight.tsx';
import { Blur } from './range-components/blur.tsx';
import { fontStyles } from '../utils/font-styles.ts';

export function InteractiveButtonEdit() {
    const [fontSize, setFontSize] = useState(16);
    const [borderRadius, setBorderRadius] = useState(5);
    const [color, setColor] = useState('#000000');
    const [paddingHorizontal, setPaddingHorizontal] = useState(10);
    const [paddingVertical, setPaddingVertical] = useState(5);
    const [text, setText] = useState('Sample');
    const [fontWeight, setFontWeight] = useState(700);
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [blur, setBlur] = useState(0);
    const [selectedFontStyle, setSelectedFontStyle] = useState(
        fontStyles[0].value
    );

    const handleCopyStyles = () => {
        const styles = {
            'font-size': `${fontSize}px`,
            'font-weight': fontWeight,
            color: color,
            'border-radius': `${borderRadius}px`,
            padding: `${paddingVertical}px ${paddingHorizontal}px`,
            'box-shadow': `${xAxis}px ${yAxis}px ${blur}px rgba(0, 0, 0, 0.5)`,
        };

        navigator.clipboard
            .writeText(JSON.stringify(styles, null, 2))
            .then(() => {
                alert('Стили скопированы в буфер обмена!');
            })
            .catch((err) => {
                console.error('Не удалось скопировать стили: ', err);
            });
        {
            /*Данное решение не мое, не понял как работает.*/
        }
    };

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
                <FontSize value={fontSize} onChange={setFontSize} />
                <BorderRadius value={borderRadius} onChange={setBorderRadius} />
                <PaddingHorizontal
                    value={paddingHorizontal}
                    onChange={setPaddingHorizontal}
                />
                <PaddingVertical
                    value={paddingVertical}
                    onChange={setPaddingVertical}
                />
                <Color value={color} onChange={setColor} />
                <Text value={text} onChange={setText} />
                <FontWeight value={fontWeight} onChange={setFontWeight} />
                <Blur
                    xAxis={xAxis}
                    yAxis={yAxis}
                    blur={blur}
                    onChange={(values) => {
                        setXAxis(values.xAxis);
                        setYAxis(values.yAxis);
                        setBlur(values.blur);
                    }}
                />
                <select
                    value={selectedFontStyle}
                    onChange={(e) => setSelectedFontStyle(e.target.value)}
                >
                    {fontStyles.map((fontStyle) => (
                        <option key={fontStyle.value} value={fontStyle.value}>
                            {fontStyle.label}
                        </option>
                    ))}
                </select>
                {/*Данное решение не мое, не понял как работает.*/}
            </div>
            <div className={css.playground}>
                <button
                    style={{
                        fontSize,
                        borderRadius,
                        padding: `${paddingVertical}px ${paddingHorizontal}px`,
                        border: '1px solid black',
                        color: color,
                        fontWeight,
                        boxShadow: `${xAxis}px ${yAxis}px ${blur}px rgba(0, 0, 0, 0.5)`,
                        fontFamily: selectedFontStyle,
                    }}
                >
                    {text}
                </button>
                <div className={css.styleBufer}>
                    <pre>
                        {JSON.stringify(
                            {
                                'font-size': `${fontSize}px`,
                                'font-weight': fontWeight,
                                color: color,
                                'border-radius': `${borderRadius}px`,
                                padding: `${paddingVertical}px ${paddingHorizontal}px`,
                                'box-shadow': `${xAxis}px ${yAxis}px ${blur}px rgba(0, 0, 0, 0.5)`,
                            },
                            null,
                            2
                        )}
                    </pre>
                    <button onClick={handleCopyStyles}>Скопировать</button>
                </div>
            </div>
        </div>
    );
}
