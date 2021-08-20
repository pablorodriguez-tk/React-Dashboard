import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <Menu />
          <Main />
        </div>
      </div>
    </Router>
  );
};

export default App;
