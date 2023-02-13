import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>      <h1>Meet The Chefs!</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='A real human chef'
              label='Frank'
              path='/services'
            />
            <CardItem
              src='images/img-7.jpg'
              text='"Can make fried eggs for days"'
              label='Peter'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='makes boss toast'
              label='Jerry'
              path='/services'
            />
            <CardItem
              src='./images/img-7.jpg'
              text=' on community sevice on weekends'
              label='Ben'
              path='/products'
            />
            <CardItem
              src='images/img-7.jpg'
              text='strong wrists'
              label='Meg'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;