import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import { Counter } from './Counter';
function App() {
  return (
    <div className="App">
      <MyHeader />
      <Counter />

      <MyFooter />
    </div>
  );
}

export default App;
