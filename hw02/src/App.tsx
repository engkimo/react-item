import './App.css';

const n = Math.floor(Math.random() * 10);
const threshold = 5;


function App() {
  return (
    // コメント
    <div>
      {n > threshold && <p>`n` is larger than {threshold}</p>}
      <p>`n` is {n%2 === 0 ? 'even' : 'odd'}</p>
    </div>
  );
}

export default App;
