import React from 'react';
import Button from 'material-ui/Button';

const Buttons = (props) => {
  const { applyText, applyAction, cancelLink } = props
  return (
    <div>
      <Button variant="raised" color="primary" style={{margin: '30px'}} onClick={applyAction}>
        {applyText}
      </Button>
      <Button variant="raised" style={{margin: '30px'}} href={cancelLink}>
        Cancel
      </Button>
    </div>
  )
}

export default Buttons
