import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import img1 from '../images/python.png'
import img2 from '../images/saas.jpg'
import img3 from '../images/figma.png'
import img4 from '../images/sql.jpg'
import img5 from '../images/blockchain.jpg'

function Cards() {
  return (
    <div className='cards' >
      <h1>Explore out these Topics!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Explore the python features helps for quick and fast Anlaysis of Data'
              label='Python'
              path='/Courses/material'
            />
            <CardItem
              src={img2}
              text='SaaS is a cloud-based software distribution model in which applications are hosted and maintained '
              label='SaaS'
              path='/Courses/material'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Design and prototyping tool used by designers to create and share user interfaces and interactive designs'
              label='Figma'
              path='/Courses/material'
            />
            <CardItem
              src={img4}
              text='SQL  is a domain-specific language used for managing and manipulating relational databases'
              label='SQL'
              path='/Courses/material'
            />
            <CardItem
              src={img5}
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