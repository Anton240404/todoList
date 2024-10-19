type Props = {
    disabled: boolean;
    addTodo: () => void;
};

export function AddButton(props: Props) {
    return (
        <button
            className={`todo-button ${props.disabled ? 'todo-button-disabled' : ''}`}
            onClick={() => props.addTodo()}
            disabled={props.disabled}
        >
            Добавить
        </button>
    );
}
