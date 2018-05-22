import React from 'react';
import { compose } from 'recompose';

import Header from '../components/Header';

const enhance = compose()

const Profile = enhance(props => {
  return (
    <div>
      <Header />
      <h1>Profile</h1>
    </div>
  )
})

export default Profile
