import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className='well blosd'>
        <h3 className='lead'>
          Quick Shop
        </h3>
        <div className='input-group'>
          <form onSubmit={this.handleSubmit}>
            <input
              className='form-control'
              type='text'
              onChange={this.handleChange}
            />
          </form>
          <span className='input-group-btn'>
            <button className='btn btn-default'>
              <span className='glyphicon glyphicon-search' />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
