import React from 'react'

const TodosList = ({TodosList,deleteHandler}) => {
  return (
<div>
{TodosList.map((todo,index) =>
<div key={index} className="label-container">
<h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>
<div><img src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" alt="Delete" className='delete-icon'/>
</div></button></h5>
</div>)}
</div>
  )
}

export default TodosList


