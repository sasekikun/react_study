import React from 'react';

import Header from '../components/Header'
import Profile from '../components/profile'

const Frends = () => {
  return (
    <div>
      <Header />
      <h1>Frends</h1>
      <Profile
        img="/images/kinako.jpg"
        name="きなこ"
        type="猫"
        age="1歳2ヶ月"
        sex="メス"
        link="kinako"
      />
      <Profile
        img="/images/basuteto.jpg"
        name="バステト神"
        type="猫"
        age="0歳8ヶ月"
        sex="メス"
        link="basuteto"
      />
      <Profile
        img="/images/anzu.jpg"
        name="杏子"
        type="モルモット"
        age="3歳4ヶ月"
        sex="メス"
        link="anzu"
      />
    </div>
  )
}

export default Frends
