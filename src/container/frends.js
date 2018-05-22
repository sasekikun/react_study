import React from 'react';

import Header from '../components/Header'
import Profile from '../components/profile'

import ProfileDatas from '../actions/ProfileData'

const Frends = () => {
  const datas = ProfileDatas
  return (
    <div>
      <Header />
      <h1>Frends</h1>
      {Object.keys(datas)
        .map(profile => {
          return (
            <Profile
              img={ProfileDatas[profile].img}
              name={ProfileDatas[profile].name}
              type={ProfileDatas[profile].type}
              age={ProfileDatas[profile].age}
              sex={ProfileDatas[profile].sex}
              link={profile}
            />
          )
      })}
    </div>
  )
}

export default Frends
