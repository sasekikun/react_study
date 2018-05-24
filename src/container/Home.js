import React from 'react'

import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{margin:'30px'}}>
        <h1>株式会社させきくん各員のペット紹介</h1>
        <Paragraph text="5/24 React勉強会用のページです" />
        <Link text="こちらからどうぞ!" anchor="/friends" />
      </div>
    </div>
  )
}

export default Home
