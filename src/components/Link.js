import React from 'react'

const Link = props => {
  const { text, anchor, style } = props
  return (
    <p style={style}>
      <a href={anchor}>
        {text}
      </a>
    </p>
  )
}

export default Link
