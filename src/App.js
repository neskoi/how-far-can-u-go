import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './containers/Layout/Layout';
import Core from './containers/Core/Core';
import Rank from './components/Rank/Rank';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        { 
          <Layout>
            <Switch>
              <Route exact path="/">
                <Core />
              </Route>
              <Route path="/ranking">
                <Rank />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Layout>
        }
      </div>
      
    </Router>
  );
}

export default App;
