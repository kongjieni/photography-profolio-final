import React, { Component } from 'react'
import './Cards.css';
import CardItem from './CardItem';

export default class CardContainer extends Component {

  state = {
    photos: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/photos/')
      .then(response => response.json())
      .then(photos => this.setState({photos}))
  }

  render() {
    return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {this.state.photos.map(photo => {
            return <CardItem link={photo.link} photo={photo} image={photo.image} key={photo.id} description={photo.description} title={photo.title}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}
