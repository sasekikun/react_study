import React from 'react';

import Header from '../components/Header'
import Profile from '../components/profile'
import ApplyButtons from '../components/ApplyButtons'

const applyACtion = (e) => {
  console.log("押されたよー")
}

const Info = (props) => {
  const profiles = {
    kinako: {
      img:"/images/kinako.jpg",
      name:"きなこ",
      type:"猫",
      age:"1歳2ヶ月",
      sex:"メス",
      description:"壁での爪とぎやめてほしい"
    },
    basuteto: {
      img:"/images/basuteto.jpg",
      name:"バステト神",
      type:"猫",
      age:"0歳8ヶ月",
      sex:"メス",
      description:"にゃー↑にゃー↓と呼ばれる方が多い"
    },
    anzu: {
      img:"/images/anzu.jpg",
      name:"杏子",
      type:"モルモット",
      age:"3歳4ヶ月",
      sex:"メス",
      description:"今回のメンツの中で唯一猫じゃない"
    }
  }
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
                cancelLink="/frends/"
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
