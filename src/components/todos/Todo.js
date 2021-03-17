const Todo = ({ title, id, complete, updateComplete }) => {
  return (
    <li
      style={ complete ? {...styles.complete } : null }
      onClick={() => updateComplete(id)}
    >
      { title }
    </li>
  )
}
const styles = {
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}
export default Todo;