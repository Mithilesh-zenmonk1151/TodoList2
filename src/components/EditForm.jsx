import React, {useState} from 'react'
import Button from '@mui/material/Button';
// import SubmitIcon from '@mui/icons-material/Submit';

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input1" placeholder='Update task' />
    
      <Button variant="contained" type='submit' color="success" className='update-btn'>
        Update
      </Button>
  </form>
  )
}