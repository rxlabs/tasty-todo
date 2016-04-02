import React from 'react'
import { connect } from 'react-redux'
import ListItem from 'material-ui/lib/lists/list-item'
import TextField from 'material-ui/lib/text-field'

class EditTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.text}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSave = () => {
    this.props.onSave(this.props.id, this.state.value)
  }

  render = () => {
    return (
      <ListItem>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleSave}
          onKeyDown={(e) => {
            if (e.keyCode === 13) { this.handleSave() }
          }}
        />
      </ListItem>
    )
  }
}

export default connect()(EditTodo)
