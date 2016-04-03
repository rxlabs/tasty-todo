import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'

const Control = ({ text, active, onClick }) => (
  <RaisedButton
    label={text}
    disabled={active}
    onClick={onClick}
  />
)

Control.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Control
