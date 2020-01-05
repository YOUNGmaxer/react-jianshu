import React from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
