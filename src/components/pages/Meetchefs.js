import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet The Chefs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.png'
              text='A real human chef'
              label='Buffet'
              path='/services'
            />
            <CardItem
              src='images/img-7.jpg'
              text='We can make fried eggs for days'
              label='Weddings'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='tours around the world'
              label='concerts'
              path='/services'
            />
            <CardItem
              src='./images/img-9.jpg'
              text='easy meals made fresh delivered weeekly '
              label='meal prep'
              path='/products'
            />
            <CardItem
              src='images/img-home.jpg'
              text='we can host for up to 4,000,000 guests '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;