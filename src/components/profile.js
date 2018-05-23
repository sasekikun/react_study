import React from 'react';
import { compose } from 'recompose';

import '../stylesheets/profile.css'

const enhance = compose()

const Profile = enhance(props => {
  const { profile, link } = props
  return (
    <div className="profileCard" style={profile.style}>
      <img src={profile.img} className="profileImg" alt={profile.name} />
      <p>名前：{profile.name}</p>
      <p>種別：{profile.type}</p>
      <p>年齢：{profile.age}</p>
      <p>性別：{profile.sex}</p>
      <p>飼主：{profile.master}</p>
      { link ? <p><a href={"/friends/" + link}>詳細ページへ</a></p> : null}
    </div>
  )
})

export default Profile
