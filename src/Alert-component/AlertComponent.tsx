import React from 'react';
import styles from './Alert.module.css';
import successIcon from './icons/success.svg';
import infoIcon from './icons/info.svg';
import warningIcon from './icons/warning.svg';
import errorIcon from './icons/error.svg';

type SeverityType = 'success' | 'info' | 'warning' | 'error';

type Props = {
    severity: SeverityType;
    text: string;
};

// Убрать Component - и так понятно, что это компонент
// почему тогда не пишешь colorsVariable, sumFunction, ... ?
export function Alert({ severity, text }: Props) {
    // Иконки сделать картинками, стили вынести в css классы
    const icons = {
        success: successIcon,
        info: infoIcon,
        warning: warningIcon,
        error: errorIcon,
    };
    return (
        <div className={`${styles.alert} ${styles[severity]}`}>
            <img src={icons[severity]} alt={severity} className={styles.icon} />
            <span>{text}</span>
        </div>
    );
}
