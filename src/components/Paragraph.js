import React from 'react';

const Profile = props => {
  const { text, style } = props
  return (
    <p style={style}>
      {text}
    </p>
  )
}

export default Profile
