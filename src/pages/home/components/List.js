import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo } from '../style';

class List extends Component {
  render() {
    let { list } = this.props;
    return (
      <div>
        {
          list.map(item => {
            return (
              <Link key={item.get('id')} to={`/detail/${item.get('id')}`}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h1 className="title">{item.get('title')}</h1>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
});

export default connect(mapState)(List);