import React from 'react';
import { compose } from 'recompose';

import '../stylesheets/profile.css'

const enhance = compose()

const Profile = enhance(props => {
  const { img, name, type, age, sex, link, style, master } = props
  return (
    <div className="profileCard" style={style}>
      <img src={img} className="profileImg" alt={name} />
      <p>名前：{name}</p>
      <p>種別：{type}</p>
      <p>年齢：{age}</p>
      <p>性別：{sex}</p>
      <p>飼主：{master}</p>
      {(() => {
        if (link !== undefined) {
          return (
            <p><a href={"/friends/" + link}>詳細ページへ</a></p>
          )
        }
      })()}
    </div>
  )
})

export default Profile
