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
import { Select } from './select/select.tsx';

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
    const [copied, setCopied] = useState(false);

    const handleCopyStyles = () => {
        const styles = {
            'font-size': `${fontSize}px`,
            'font-weight': fontWeight,
            color: color,
            'border-radius': `${borderRadius}px`,
            padding: `${paddingVertical}px ${paddingHorizontal}px`,
            'box-shadow': `${xAxis}px ${yAxis}px ${blur}px rgba(0, 0, 0, 0.5)`,
        };
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);

        const stylesInString = JSON.stringify(styles, null, 2);
        navigator.clipboard.writeText(stylesInString);
    };
    /*    const result = myMap([1, 2, 3, 4, 5], (item, index) => {
            return item + index;
        });
        console.log(result);*/

    return (
        <div className={css.root}>
            <div className={css.side}>
                <div className={css.wrapper}>
                    <FontSize value={fontSize} onChange={setFontSize} />
                    <BorderRadius
                        value={borderRadius}
                        onChange={setBorderRadius}
                    />
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

                    <Select
                        value={[
                            'Times New Roman',
                            'Arial',
                            'Calibri',
                            'Georgia',
                        ]}
                    />
                    <select
                        value={selectedFontStyle}
                        onChange={(e) => setSelectedFontStyle(e.target.value)}
                    >
                        {fontStyles.map((fontStyle) => (
                            <option
                                key={fontStyle.value}
                                value={fontStyle.value}
                            >
                                {fontStyle.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={css.side}>
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
                </div>
            </div>

            <div className={css.side}>
                <div className={css.styleBuffer}>
                    <pre className={css.json}>
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
                    <button
                        className={
                            copied
                                ? `${css.buttonCopy} ${css.copied}`
                                : css.buttonCopy
                        }
                        onClick={handleCopyStyles}
                    >
                        {copied ? 'Скопировано' : 'Скопировать'}
                    </button>
                </div>
            </div>
        </div>
    );
}
