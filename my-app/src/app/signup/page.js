'use client'
import React from 'react';
import { useState } from 'react';
import styles from '../styles/home.module.css'

const categories = [
  {
    title: 'Men fashion',
    image: 'https://source.unsplash.com/random/200x200/?men,fashion',
    link: '/men-fashion',
  },
  {
    title: 'Women fashion',
    image: 'https://source.unsplash.com/random/200x200/?women,fashion',
    link: '/women-fashion',
  },
  {
    title: 'Kids fashion',
    image: 'https://source.unsplash.com/random/200x200/?kids,fashion',
    link: '/kids-fashion',
  },
  {
    title: 'Mobiles',
    image: 'https://source.unsplash.com/random/200x200/?mobile',
    link: '/mobiles',
  },
  {
    title: 'Electronic',
    image: 'https://source.unsplash.com/random/200x200/?electronics',
    link: '/electronics',
  },
  {
    title: 'Beauty',
    image: 'https://source.unsplash.com/random/200x200/?beauty',
    link: '/beauty',
  },
  {
    title: 'Sports',
    image: 'https://source.unsplash.com/random/200x200/?sports',
    link: '/sports',
  },
];

const App = () => {
      return (
        <div className="container">hii you atre in signup</div>
      )
};

export default App;