import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedselector } from '../hooks/useTypedSelector'

export const TodoList = () => {
  const {todos, loading, error, page, limit} = useTypedselector(state => state.todos);
  const {fetchTodo, setTodoPage} = useActions();
  const listPages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodo(limit, page);
  }, [page]);

  if(loading) {
    return <div>Идет загрузка...</div>
  }

  if(error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {todos.map(todo => <div key={todo.id}>{todo.id}: {todo.title}</div>)}
      <div style={{display: "flex"}}>
        {listPages.map(el => <p onClick={() => setTodoPage(el)} style={{display: "inline-block", border: "1px solid black", margin: "0 10px", padding: "5px", cursor: "pointer"}} key={el}>{el}</p>)}
      </div>
    </div>
  )
}
