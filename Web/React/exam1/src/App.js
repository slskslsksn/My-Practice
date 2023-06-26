import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import { Counter } from './Counter';
import { Container } from './Container';
function App() {
  const props = {
    value: 5,
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <Container>
      <MyHeader />
      <div className="App">
        <Counter {...props} />
      </div>
      <MyFooter />
    </Container>
  );
}

export default App;
