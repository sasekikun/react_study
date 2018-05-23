import React from 'react';

import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>株式会社させきくん各員のペット紹介</h1>
      <Paragraph text="5/24 React勉強会用のページです" />
      <p><a href="/friends">こちら</a>からどうぞ！</p>
    </div>
  )
}

export default Home
