import * as React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Filters } from './components/Filters';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <Filters />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
