
// create your App component here
import React, { Component } from 'react'

class GifSearch extends React.Component {
	state = {
    	query: ""
  	}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input  type="text" value={this.state.query} onChange={this.handleChange} />
         <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchSubmit(this.state.query);
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }
}

export default GifSearch