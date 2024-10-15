import { Todo } from '../../App.tsx';

type Props = {
    deleteTodo: (id: string) => void;
    todos: Todo[];
    gap: number;
};

export function TodoList(props: Props) {
    return (
        <div className="todo-list" style={{ gap: props.gap }}>
            {props.todos.map((todo: Todo) => (
                <div className="todo-item" key={todo.id}>
                    <h1 className="todo-title">{todo.text}</h1>
                    <p className="todo-text">{todo.description}</p>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteTodo(todo.id)}
                    >
                        Удалить
                    </button>
                </div>
            ))}
        </div>
    );
}
