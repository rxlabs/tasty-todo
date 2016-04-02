import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import TextField from 'material-ui/lib/text-field'

class EditTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.text}
  }

  componentDidMount = () => {
    this.refs.input.focus()
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
          name={`todo-edit-${this.props.id}`}
          ref='input'
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

EditTodo.propTypes = {
  id: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired
}

export default EditTodo
