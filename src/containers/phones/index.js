import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../../actions';

class Phones extends Component {

  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    return (
      <div>
        Phones
      </div>
    );
  }

}

export default connect(null, {
  fetchPhones
})(Phones);
