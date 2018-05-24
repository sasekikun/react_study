import React from 'react'

import Header from '../components/Header'
import Profile from '../components/Profile'
import Link from '../components/Link'

import ProfileDatas from '../actions/ProfileData'

const Friends = () => {
  const datas = ProfileDatas
  return (
    <div>
      <Header />
      <div style={{margin: '30px'}}>
        <h1>一覧ページ</h1>
        <Link text="登録はこちら" anchor="/registration" />
        {Object.keys(datas)
          .map(key => {
            return (
              <Profile
                key={key}
                profile={datas[key]}
                link={key}
                style={{margin:'30px'}}
              />
            )
        })}
      </div>
    </div>
  )
}

export default Friends
