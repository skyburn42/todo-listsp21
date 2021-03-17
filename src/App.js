import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
  ]}
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  addTodo = (incommingTodo) => {
    const { todos } = this.state
    const { title, complete } = incommingTodo
    // const newTodo = { id: this.getUniqId(), title: title, complete: complete}
    const newTodo = { id: this.getUniqId(), title, complete }
    this.setState({ todos: [newTodo, ...todos]})
    // this.setState({ todos: [newTodo, 
    //   { id: 1, title: "Learn Rails", complete: true },
    //   { id: 2, title: "Learn React", complete: false },
    //   { id: 3, title: "Learn Router", complete: false },
    // ]})
    // this.setState({ todos: [...todos, newTodo]})
  }
  updateComplete = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( t => {
        if (t.id === id) {
          return {
            ...t, 
            complete: !t.complete
          }
        }
        return t
      })
    })
  }
  render() {
    const { todos } = this.state
    return (
      <>
        <TodoList todos={todos} updateComplete={this.updateComplete} />
        <TodoForm addTodo={this.addTodo} />
      </>
    )
  }
}
export default App;