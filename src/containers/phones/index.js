import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import R from 'ramda';
import { fetchPhones } from '../../actions';
import { getPhones } from '../../selectors';

class Phones extends Component {

  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhone(phone, index) {
    const shortDescription = `${R.take(60, phone.description)}...`;
    return (
      <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
        <div className='thumbnail'>
          <img
            className='img-thumbnail'
            src={phone.image}
            alt={phone.name}
          />
        </div>
        <div className='caption'>
          <h4 className='pull-right'>
            {phone.price}
          </h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </h4>
          <p>{shortDescription}</p>

          <p className='itemButton'>
            <button className='btn btn-primary'>
              Buy Now!
            </button>
            <Link to={`/phones/${phone.id}`} className='btn btn-default' style={{ marginLeft: '10px' }}>
              More info
            </Link>
          </p>

        </div>
      </div>
    );
  }

  render() {
    const { phones } = this.props;
    console.log('phones: ', phones);
    return (
      <div className='books row'>
        {phones.map((phone, index) => this.renderPhone(phone, index))}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  phones: getPhones(state)
});

export default connect(mapStateToProps, {
  fetchPhones
})(Phones);