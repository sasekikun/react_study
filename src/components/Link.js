import React from 'react';
import { compose } from 'recompose';

const enhance = compose()

const Link = enhance(props => {
  const { text, anchor, style } = props
  return (
    <p style={style}>
      <a href={anchor}>
        {text}
      </a>
    </p>
  )
})

export default Link
