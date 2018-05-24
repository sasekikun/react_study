import React from 'react';

import TextField from 'material-ui/TextField'

import Header from '../components/Header'
import ApplyButtons from '../components/ApplyButtons'
import Paragraph from '../components/Paragraph'
import Uploader from '../components/Uploader'

const applyACtion = (e) => {
  console.log("登録するよー")
}

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{margin: '30px'}}>
        <h1>登録ページ</h1>
        <Paragraph text="画像" />
        <Uploader />
        <Paragraph text="名前" />
        <TextField />
        <Paragraph text="種別" />
        <TextField />
        <Paragraph text="年齢" />
        <TextField />
        <Paragraph text="性別" />
        <TextField />
        <ApplyButtons
          applyText="登録する"
          applyAction={applyACtion}
          cancelLink="/friends"
        />
      </div>
    </div>
  )
}

export default Home
