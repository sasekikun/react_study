import React from 'react';
import { compose } from 'recompose';

const enhance = compose()

const Profile = enhance(props => {
  const { text, style } = props
  return (
    <p style={style}>
      {text}
    </p>
  )
})

export default Profile
