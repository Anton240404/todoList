import React, { useState } from 'react';
import styles from './ReorderableList.module.css';

/*interface Employee {
    id: number | string;
    name: string;
    position: string;
}*/

const initialEmployees: Employee[] = [
    {
        id: 1,
        name: 'Белусова Ольга Макаровна',
        position: 'Специалист по охране труда, Отдел охраны труда',
    },
    {
        id: 2,
        name: 'Мухина Алина Анатольевна',
        position: 'Начальник службы охраны труда, Отдел охраны труда',
    },
    {
        id: 3,
        name: 'Охтубинский Алексей Геннадьевич',
        position: 'Начальник отдела охраны труда',
    },
    {
        id: 4,
        name: 'Охотников Василий Степанович',
        position: 'Начальник бюро, Отдел охраны труда',
    },
    {
        id: 5,
        name: 'Сысоев Никита Матвеевич',
        position: 'Начальник штаба гражданской обороны, Отдел охраны труда',
    },
];

const ReorderableList = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [newName, setNewName] = useState('');
    const [newPosition, setNewPosition] = useState('');

    const moveItem = (index: number, direction: 'up' | 'down') => {
        const newEmployees = [...employees];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newEmployees.length) return;
        [newEmployees[index], newEmployees[targetIndex]] = [
            newEmployees[targetIndex],
            newEmployees[index],
        ];
        setEmployees([...newEmployees]);
    };

    const removeItem = (id: number | string) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    const addEmployee = () => {
        if (!newName.trim() || !newPosition.trim()) return;
        const newEmployee: Employee = {
            id: employees.length + 1,
            name: newName,
            position: newPosition,
        };
        setEmployees([...employees, newEmployee]);
        setNewName('');
        setNewPosition('');
    };

    return (
        <div className={styles.listContainer}>
            <h2>Лист ознакомления работников</h2>
            <p>
                Список работников, от которых требуется личная подпись в
                распечатанном документе
            </p>
            <ul className={styles.list}>
                {employees.map((emp, index) => (
                    <li key={emp.id}>
                        <div>
                            <p>{emp.name}</p>
                            <p>{emp.position}</p>
                        </div>
                        <div>
                            <button
                                onClick={() => moveItem(index, 'up')}
                                disabled={index === 0}
                            >
                                ↑
                            </button>
                            <button
                                onClick={() => moveItem(index, 'down')}
                                disabled={index === employees.length - 1}
                            >
                                ↓
                            </button>
                            <button onClick={() => removeItem(emp.id)}>
                                ✖
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.inputContainer}>
                <input
                    className={styles.inputField}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Имя сотрудника"
                />
                <input
                    className={styles.inputField}
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                    placeholder="Должность сотрудника"
                />
            </div>
            <button className={styles.buttonAdd} onClick={addEmployee}>
                Добавить
            </button>
        </div>
    );
};

export default ReorderableList;
