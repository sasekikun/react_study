import React from 'react';

import Header from '../components/Header'
import Profile from '../components/profile'
import ApplyButtons from '../components/ApplyButtons'

import ProfileDatas from '../actions/ProfileData.js'

const applyACtion = (e) => {
  console.log("投票されたよー")
}

const Info = (props) => {
  const profiles = ProfileDatas
  const path = props.match.params.name
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      {(() => {
        if (profiles[path] !== undefined) {
          return (
            <React.Fragment>
              <Profile
                img={profiles[path].img}
                name={profiles[path].name}
                type={profiles[path].type}
                age={profiles[path].age}
                sex={profiles[path].sex}
              />
              <p>{profiles[path].description}</p>
              <ApplyButtons
                applyText="投票する"
                applyAction={applyACtion}
                cancelLink="/friends/"
              />
            </React.Fragment>
          )
        } else {
          return (
            <p>存在しません</p>
          )
        }
      })()}
    </div>
  )
}

export default Info
