import { useEffect, useState } from 'react';
function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    const value = toDo;
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo('');
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My ToDos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder="Write your todo..." value={toDo} />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
