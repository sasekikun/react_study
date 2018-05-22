import React from 'react';
import { compose } from 'recompose';

import Header from '../components/Header';

const enhance = compose()

const Profile = enhance(props => {
  const { img, name, type, age, sex } = props
  return (
    <div style={{margin: '30px',padding: '10px', width: '200px', border:'solid'}}>
      <img src={img} style={{width: '100%' }} />
      <p>名前：{name}</p>
      <p>種別：{type}</p>
      <p>年齢：{age}</p>
      <p>性別：{sex}</p>
    </div>
  )
})

export default Profile
