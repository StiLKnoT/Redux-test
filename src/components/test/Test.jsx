import React, {useState} from 'react'

function Test() {
    const [value, setValue] = useState([]);
    const [text, setText] = useState('');

    const AddValue = () => {
        if (text.trim().length){
            setValue([
                ...value,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }
    }

    const RemoveValue = (todoId) =>{
        setValue(value.filter(todo => todo.id !== todoId))
    }
    const toggleCompleted = (todoId) => {
        setValue(
            value.map(todo =>{
                if (todo.id !== todoId) return todo
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        )

    }
  return (
    <div>
        <div className='App'>
            <label>
                <input value={text} onChange={(e)=> setText(e.target.value)}/>
                    {/* {console.log(text)} */}
                <button onClick={AddValue}>Add</button>
            </label>
            <ul>
                {
                    value.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={()=>toggleCompleted(todo.id)}/>
                            <span>{todo.text}</span>
                            <span style={{color: "red", cursor:"pointer"}} onClick={() => RemoveValue(todo.id)}>&times;</span>
                            {console.log(todo)}

                        </li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default Test
 