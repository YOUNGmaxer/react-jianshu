import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 750px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 500px;

  .banner-img {
    width: 500px;
  }
`;

export const HomeRight = styled.div`
  width: 200px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 12px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    padding-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;

  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 300px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 200px;
`;

export const RecommendItem = styled.div`
  width: 200px;
  height: 35px;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
`;