import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import './static/iconfont/iconfont.css';

const Root = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <App/>
    </Fragment>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
