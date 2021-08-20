import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <Menu />
        </div>
      </div>
    </Router>
  );
};

export default App;
