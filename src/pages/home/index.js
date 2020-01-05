import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" alt="banner-img" src="https://upload-images.jianshu.io/upload_images/13753657-a3f2b0eb81cde007.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/690/format/webp" />
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
}

const mapState = (state) => ({
});

export default connect(mapState, null)(Home);