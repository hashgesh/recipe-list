import { Component } from 'react';

class Layout extends Component {
  render() {
    return <div className='appLayout'>{this.props.children}</div>;
  }
}
export default Layout;
