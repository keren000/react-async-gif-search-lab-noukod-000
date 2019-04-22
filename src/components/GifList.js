import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'

class GifList extends React.Component {
	render() {
    const renderGifs = this.props.gifs.map(gif => (
      <li><img src={gif.images.original.url} alt="gif"/></li>
    ));

    return (
      <ul>{renderGifs}</ul>
    )
  }
}


export default GifList 