import {
   BrowserRouter,
   Switch,
   Route
} from 'react-router-dom';
import store  from './Store';
import { Provider } from 'react-redux';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import ResumePage from './Pages/ResumePage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Provider store={store}>
          <Switch>
            <Route path="/resume">
              <ResumePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Provider>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
