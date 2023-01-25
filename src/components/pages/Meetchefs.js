import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet The Chef's!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Buffet Service for Mulitple types of events'
              label='Buffet'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Have The most Special day of your life with us'
              label='Weddings'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='tours around the world'
              label='concerts'
              path='/services'
            />
            <CardItem
              src='./images/img-5.jpg'
              text='easy meals made fresh delivered weeekly '
              label='meal prep'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
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