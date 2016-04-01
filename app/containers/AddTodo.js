import React from 'react'
import { connect } from 'react-redux'
import ListItem from 'material-ui/lib/lists/list-item'
import TextField from 'material-ui/lib/text-field'

import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSave = () => {
    this.props.dispatch(addTodo(this.state.value))
    this.setState({value: ''})
  }

  render = () => {
    return (
      <ListItem>
        <TextField
          hintText='New todo'
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

export default connect()(AddTodo)
