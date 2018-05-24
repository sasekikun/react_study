import React from 'react'

import Link from './Link'

const Header = () => {
  return (
    <div>
      <Link text="Home" anchor="/" style={{display:'inline-block', margin:'10px'}} />
      <Link text="Friends" anchor="/friends" style={{display:'inline-block', margin:'10px'}} />
      <Link text="Registration" anchor="/registration" style={{display:'inline-block', margin:'10px'}} />
    </div>
  )
}

export default Header
