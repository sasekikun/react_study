import React from 'react';

import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

import '../stylesheets/profile.css'

const Profile = props => {
  const { profile, link, style } = props
  return (
    <div className="profileCard" style={style}>
      <img src={profile.img} className="profileImg" alt={profile.name} />
      <Paragraph text={"名前：" + profile.name} />
      <Paragraph text={"種別：" + profile.type} />
      <Paragraph text={"年齢：" + profile.age} />
      <Paragraph text={"性別：" + profile.sex} />
      <Paragraph text={"飼主：" + profile.master} />
      { link ? <Link text="詳細ページへ" anchor={"/friends/" + link} /> : null}
    </div>
  )
}

export default Profile
