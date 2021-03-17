import Todo from './Todo';
const TodoList = ({ todos, updateComplete }) => {
  return (
    <>
      <h1>Todos</h1>
      {
        <ul>
          { todos.map( t => (
            // <li key={t.id}>
            //   {t.title}
            // </li>
            // <Todo key={t.id} title={t.title} id={t.id} complete={t.complete} />
            <Todo key={t.id} {...t} updateComplete={updateComplete} />
          ))}
        </ul>
      }
    </>
  )
}
export default TodoList;