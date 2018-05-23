import React from 'react';

import Header from '../components/Header'
import Profile from '../components/profile'

import ProfileDatas from '../actions/ProfileData'

const Friends = () => {
  const datas = ProfileDatas
  return (
    <div>
      <Header />
      <h1>一覧ページ</h1>
      <p>検索は<a href="/search">こちら</a>から</p>
      {Object.keys(datas)
        .map(key => {
          return (
            <Profile
              key={key}
              profile={ProfileDatas[key]}
              link={key}
            />
          )
      })}
    </div>
  )
}

export default Friends
