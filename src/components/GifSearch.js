
// create your App component here
import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'


class GifSearch extends Component {

  state = {
      query: ""
  }

  handleChange = event => {
   this.setState(
     {query: event.target.value}
   );
 }

 handleSubmit = event => {
   event.preventDefault();
   this.props.fetchGIFs(this.state.query)
 }

 render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Gif type:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default GifSearch