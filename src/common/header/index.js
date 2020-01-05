import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    let { props } = this;
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe60b;
            </span>
            {this.getListArea(props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe615;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea() {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);