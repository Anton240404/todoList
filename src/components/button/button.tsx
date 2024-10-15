import css from './button.module.css';

type Props = {
    text: string;
    colorVariant: 'success' | 'danger' | 'warning';
    onClick?: () => void;
};

export function Button(props: Props) {
    const buttonClass = `${css.button} ${css[props.colorVariant]}`;
    return (
        <button className={buttonClass} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
