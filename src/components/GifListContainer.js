//Write your code here!
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
   		gifs: []
  }

  render() {
    return (
      <div>
      < GifList gifs={this.state.gifs} />
        <GifSearch searchSubmit={this.searchSubmit} />

      </div>
    )
  }

  componentDidMount() {
    this.searchSubmit();
  }

  searchSubmit = (query = "jellyfish") => {
  	fetch('http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0,3)
        })
      })
  }
}

export default GifListContainer 