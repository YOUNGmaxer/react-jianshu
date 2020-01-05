import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
