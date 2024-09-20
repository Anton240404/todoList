import { ReactNode, useState } from 'react';
import { Button } from './components/print-sum-text';

// Стейт нельзя менять напрямую.
// Компонент - это функция, которая возвращает JSX разметку
// В реакт можно отображать только string number или ReactNode[]
// У компонента всегда только ОДИН аргумент - это объект

// Реализовать удаление туду

function PrintSumText() {
  return <p>{7 + 2}</p>;
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleClickText = () => {
    const copyTodos = [...todos];
    copyTodos.push(text);
    setTodos(copyTodos);
    setText('');
  };
  const handleClickDelete = (index: number) => {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setText(copyTodos);
  };

  const test: ReactNode = <div>123</div>;

  return (
    <div>
      <button onClick={handleClickDelete}></button>
      <img src="wfewef" alt="wefwefwef" draggable="true" draggable />
      <PrintSumText />
      <Button data={'Сохранить'} count={60} />
      {Button({
        data: 'Сохранить',
        count: 60,
      })}

      {/* {Button("Сохранить")}
      {Button("Отмена")}
      {Button("Подтвердить")} */}

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => handleClickText()}>click</button>

      <ul>
        {todos.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      {/* {test}

      {["A", "B", "C"].map((x) => (
        <div>{x}</div>
      ))}

      {[
        <p>Hello</p>,
        <ul>
          <li>Test</li>
          <li>Test</li>
        </ul>,
        <p>End</p>,
      ]} */}

      <div>{}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{false}</div>
      <div>{true}</div>
    </div>
  );
}

export default App;
