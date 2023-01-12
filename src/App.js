import imagemLegal from './imagemLegal.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Esse é o site da juliana!</p>
        <p>Está em manutenção...</p>
        <img src={ imagemLegal } alt="imagemLegal" />
      </header>
    </div>
  );
}

export default App;
