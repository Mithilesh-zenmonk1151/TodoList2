import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        
        
        <Button variant="outlined" sx={{
        
        fontSize:"9px",
        marginRight:"10px",
    }} startIcon={<EditIcon />}  onClick={() => editTodo(task.id)}>
        Edit
      </Button>
      
        <Button variant="outlined" startIcon={<DeleteIcon htmlColor='white' />} sx={{backgroundColor:"red", color:"white",
        
        fontSize:"9px"
        
    }} onClick={() => deleteTodo(task.id)}>
        Delete
      </Button>
        </div>
    </div>
  )
}