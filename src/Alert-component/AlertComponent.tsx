import React from 'react';

type SeverityType = 'success' | 'info' | 'warning' | 'error';

type Props = {
    severity: SeverityType;
    text: string;
};

// Убрать Component - и так понятно, что это компонент
// почему тогда не пишешь colorsVariable, sumFunction, ... ?
export function AlertComponent({ severity, text }: Props) {
    const colors = {
        // Иконки сделать картинками, стили вынести в css классы
        success: { bg: '#E6F4EA', color: '#1E4620', icon: '✔️' },
        info: { bg: '#E1F5FE', color: '#01579B', icon: 'ℹ️' },
        warning: { bg: '#FFF3E0', color: '#E65100', icon: '⚠️' },
        error: { bg: '#FFEBEE', color: '#B71C1C', icon: '❗' },
    };

    // стили вынести в css классы
    const styles = {
        backgroundColor: colors[severity].bg,
        color: colors[severity].color,
        padding: '12px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '16px',
    };

    return (
        <div style={styles}>
            <span>{colors[severity].icon}</span>
            <span>{text}</span>
        </div>
    );
}
