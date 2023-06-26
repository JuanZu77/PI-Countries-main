import './App.css';
import {Route} from 'react-router-dom';

import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/CreateActivity';

function App() {

  return (
    <div className="App">
        
        <Route exact path='/' component={Landing}></Route>

        <Route exact path='/home' component={Home}></Route>

        <Route exact path='/countries/:id' component={Detail} ></Route>

         <Route exact path='/activity' component={Form} ></Route>
    </div>
  );
}

export default App;
