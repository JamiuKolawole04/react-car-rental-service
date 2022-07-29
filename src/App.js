import { Fragment } from 'react';

import { Header, Footer } from './components';
import { Routers } from "./routers/routers"
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />


      </Fragment>

    </div>

  );
}

export default App;
