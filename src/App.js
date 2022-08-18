import { Fragment } from 'react';

// import { Header, Footer } from './components';
import { Routers } from "./routers/routers"
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <div>
          <Routers />
        </div>


      </Fragment>

    </div>

  );
}

export default App;
