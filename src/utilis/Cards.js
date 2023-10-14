import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' >
      <h1>Explore out these Topics!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/python.png'
              text='Explore the python features helps for quick and fast Anlaysis of Data'
              label='Python'
              path='/Courses'
            />
            <CardItem
              src='images/saas.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='SaaS'
              path='/Courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Courses'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/Courses'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
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