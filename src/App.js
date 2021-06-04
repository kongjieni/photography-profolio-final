import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services';
import About from './components/About';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
