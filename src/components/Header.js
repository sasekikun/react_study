import React from 'react';

const Header = () => {
  return (
    <div>
      <p style={{display:'inline-block', margin:'10px'}}><a href="/">home</a></p>
      <p style={{display:'inline-block', margin:'10px'}}><a href="/friends">friends</a></p>
      <p style={{display:'inline-block', margin:'10px'}}><a href="/search">search</a></p>
    </div>
  )
}

export default Header
