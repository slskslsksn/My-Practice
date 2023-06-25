import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
function App() {
  let name = '윤준명';
  const style = {
    app: {
      backgroundColor: 'black',
      color: 'blue',
    },
    h2: {
      color: 'white',
    },
  };
  return (
    <div className="App" style={style.app}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <MyFooter />
    </div>
  );
}

export default App;
