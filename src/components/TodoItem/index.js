// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, delteTodo} = props
  const {id,title} = todoDetails
  const onDeleteChange = () =>{
   delteTodo(id)
  }
  return (
    <li className="item-container">
      <p>{title}</p>
      <button type="button" onClick={onDeleteChange} className="delete-btn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
