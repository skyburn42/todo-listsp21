import { Component } from 'react';
class TodoForm extends Component { 
  state = { title: "", complete: false }
  // update the state to what the user types
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: "", complete: false })
  }
  render() {
    const { title } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          name="title"
          onChange={this.handleChange}
          required
          placeholder="add a todo"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default TodoForm;