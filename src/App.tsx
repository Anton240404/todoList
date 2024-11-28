import './components/css/reset.css';
import './components/css/todo.css';
import { Button } from './components/button/button';
import { AddButton } from './components/add-button/add-button';
import { TodoList } from './components/todo-list/todo-list.tsx';
import { InteractiveButtonEdit } from './components/interactive-button/interactive-button-edit.tsx';
import { Input } from './components/todo-list/input/input.tsx';
import { Textarea } from './components/todo-list/texterea/textarea.tsx';
import { Position } from './components/position/position.tsx';
import { PositionNew } from './components/position/position.new.tsx';
import { Project } from './components/project/project.tsx';

export type Todo = {
    id: string;
    text: string;
    description: string;
};

export const App = () => {
    return <Project />;
};
