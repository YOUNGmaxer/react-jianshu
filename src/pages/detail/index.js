import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    return (
    <div>Detail {this.props.match.params.id}</div>
    )
  }
}

export default withRouter(Detail);