type Props = {
    disabled: boolean;
    addTodo: () => void;
    color: string;
};

export function AddButton(props: Props) {
    return (
        <button
            style={{ backgroundColor: props.color }}
            className={`todo-button ${props.disabled ? 'todo-button-disabled' : ''}`}
            onClick={() => props.addTodo()}
            disabled={props.disabled}
        >
            Добавить
        </button>
    );
}
