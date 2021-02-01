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
  // @TODO:
  // Figure out a way to abstract this away into some code that is more concise than this.
  // Once we build out more of the UI and API endpoints, this is going to grow substantially.
  const [seasons, setSeasons] = useState([]);
  const [areSeasonsLoaded, setAreSeasonsLoaded] = useState(false);
  const loadSeasons = useCallback(
    async () => {
      const seasons = await SeasonsLoader();

      setSeasons(seasons);
      setAreSeasonsLoaded(true);
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
              <SeasonsPage seasons={seasons} isLoaded={areSeasonsLoaded} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
