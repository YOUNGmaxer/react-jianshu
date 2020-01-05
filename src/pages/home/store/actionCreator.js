import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (ret) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: ret.topicList,
  articleList: ret.articleList,
  recommendList: ret.recommendList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const ret = res.data.data;
      dispatch(changeHomeData(ret));
    });
  }
}