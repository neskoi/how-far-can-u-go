import './App.css';
import Layout from './containers/Layout/Layout'
import Core from './containers/Core/Core';

function App() {
  return (
    <div className="App">
      {
      <Layout>
        <Core/>
      </Layout>
      }
      
    </div>
  );
}

export default App;
