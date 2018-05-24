import React from 'react'

import Header from '../components/Header'
import Profile from '../components/Profile'
import ApplyButtons from '../components/ApplyButtons'
import Paragraph from '../components/Paragraph'

import ProfileDatas from '../actions/ProfileData.js'

const applyACtion = (e) => {
  console.log("投票されたよー")
}

const Info = props => {
  const profiles = ProfileDatas
  const path = props.match.params.name
  return (
    <div>
      <Header />
      <div style={{margin:'30px'}}>
        <h1>Profile</h1>
        <Profile
          profile={profiles[path]}
        />
        <Paragraph text={profiles[path].description} />
        <ApplyButtons
          applyText="投票する"
          applyAction={applyACtion}
          cancelLink="/friends/"
        />
      </div>
    </div>
  )
}

export default Info
