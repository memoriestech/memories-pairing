import React from 'react';
import './App.css';
import logo from './logo.svg';
import config from './config';
import {GraphQLProvider} from './providers/GraphQLProvider';

function App() {
  return (
    <div className="App">
      <GraphQLProvider endpoint={config.GRAPHQL_ENDPOINT}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </GraphQLProvider>
    </div>
  );
}

export default App;
