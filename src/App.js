import { useState, useCallback, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SeasonsLoader from './loaders/SeasonsLoader'
import SiteHeader from './components/SiteHeader';
import SeasonsPage from './pages/Seasons';

function App() {
  const [seasons, setSeasons] = useState([]);
  const loadSeasons = useCallback(
    async () => {
      const seasons = await SeasonsLoader();

      setSeasons(seasons);
    }, []
  );

  useEffect(() => {
    return loadSeasons();
  }, [loadSeasons]);

  return (
    <Router>
      <div className="App">
        <div className="bg-gray-100">
          <SiteHeader />

          <Switch>
            <Route path="/">
              <SeasonsPage seasons={seasons} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
