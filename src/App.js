import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen'
import MainMenu from './Components/MainMenu'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoadingScreen} />
        <Route path="/menu" component={MainMenu} />
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
