import React, { findDOMNode, Component, PropTypes } from 'react';

let Flash = React.createClass({
  render() {
    const { text, type, isShow} = this.props;
    const showStatus = isShow ? 'show' : 'notshow';
    return (
      <section className={ `flash ${type} ${showStatus}` }>
        {text}
      </section>
    );
  }
});

export default Flash;