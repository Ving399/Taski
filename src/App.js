import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
import React from 'react';

const defaultTodo = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar curso de react', completed: true},
  { text: 'llorar con la llorona', completed: true},
  { text: 'LALALALAL', completed: true},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>
          {defaultTodo.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}

            />
          ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
