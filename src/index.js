import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {
    QueryRenderer,
    graphql,
} from 'react-relay';

import {
    Environment,
    Network,
    RecordSource,
    Store,
    ConnectionHandler,
    ViewerHandler,
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

function handlerProvider(handle) {
  switch (handle) {
    // Augment (or remove from) this list:
    case 'connection': return ConnectionHandler;
    case 'viewer': return ViewerHandler;
  }
  throw new Error(
    `handlerProvider: No handler provided for ${handle}`
  );
}

const environment = new Environment({
  handlerProvider,
  network,
  store,
});

const render = ({error, props}) => {
  if (props) {
    return <App viewer={props.viewer} />;
  } else {
    return <div>Loading</div>;
  }
}

ReactDOM.render(<QueryRenderer
    environment={environment}
    query={graphql`
      query srcQuery {
        viewer {
          ...App_viewer
        }
      }
    `}
    variables= {{}}
    render = {render}
  />,
  document.getElementById('root')
);