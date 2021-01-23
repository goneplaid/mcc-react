import config from './app.config.json';
import './App.css';
import Avatar from './Avatar';

function App() {
  return (
    <div className="App">
      <Avatar
        size="medium"
        url={`${config.API_URL}/assets/images/judges/joe_bastianich.png`}
      />
    </div>
  );
}

export default App;
