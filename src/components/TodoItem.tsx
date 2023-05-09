import { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly/>
      <span>{todo.id}. {todo.title}</span>
    </div>
  );
};

export default TodoItem;
