import React, {useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter here which you have to do today' required/>
    <Button type='submit' variant="outlined" startIcon={<AddIcon />}
     sx={{
    
       marginRight:"10px",
        color:"white",
        background:'orange',
      }} >
        ADD
      </Button>
  </form>
  )
}