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
              path='/Courses/material'
            />
            <CardItem
              src='images/saas.jpg'
              text='SaaS is a cloud-based software distribution model in which applications are hosted and maintained '
              label='SaaS'
              path='/Courses/material'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/figma.png'
              text='Design and prototyping tool used by designers to create and share user interfaces and interactive designs'
              label='Figma'
              path='/Courses/material'
            />
            <CardItem
              src='images/sql.jpg'
              text='SQL  is a domain-specific language used for managing and manipulating relational databases'
              label='SQL'
              path='/Courses/material'
            />
            <CardItem
              src='images/blockchain.jpg'
              text='Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers.'
              label='Block chain'
              path='/courses/material'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;