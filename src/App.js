import logo from './logo.svg';
import {useState} from 'react';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice'

import './App.css';
import InputField from './components/InputField';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = ( ) =>{
    dispatch(addTodo({text}));
    setText('')
  }


 
  const toggleTodoComplete = (todoId) =>{
    // setTodos(
    //   todos.map(
    //     todo =>{
    //       if (todo.id !== todoId) return todo;

    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     }
    //   )
    // )
  }
  return (
    <div className="App">
      <InputField
      text={text}
      handleInput={setText}
      handleSubmit={addTask}
      />
      <TodoList />
  
    </div>
  );
}

export default App;
