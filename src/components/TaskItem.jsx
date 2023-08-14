import {useState} from 'react'
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import Modal from './Modal';


const TaskItem = ({done,text,date, id, setRefetch}) => {

    const [doneState, setDoneState] = useState(done)
    const [showModal, setShowModal] = useState(false)


    const url = `http://localhost:3000/todos/${id}`
    const optionsPatch = {
        method:'PATCH',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            text,
            date,
            done:!done
        })
    }

    const optionsDelete =  {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            id: id
        })
    }




    function handleTaskDone(){
        setDoneState(!doneState)
        fetch(url,optionsPatch)
        setRefetch(prev =>!prev)        
    }

    function handleDeleteTask(){
        console.log(id)
        fetch(url,optionsDelete)     
        setRefetch(prev =>!prev)
    }

    function handleModal(){
        setShowModal(prev => !prev)
    }




  return (
    <>
        {showModal && <Modal 
        handleDeleteTask={handleDeleteTask}
        setShowModal={setShowModal}
        />}
      <li className="task-item">
            <div className="date">
                {date}
            </div>
            <p className={done? "task done": "task"}>{text}</p>
            <div className="button-wrapper">
                <label 
                    className="checkbox-input" 
                    htmlFor={`${id}checkbox`}>                        
                        {
                            doneState ?
                            <>
                            <DoneAllRoundedIcon />
                            </>:
                            <CheckCircleOutlineOutlinedIcon />
                        }
                    <input
                        hidden 
                        id={`${id}checkbox`}
                        type="checkbox"
                        onClick={()=> handleTaskDone()} 
                        />
                </label>

                {
                    doneState ?
                    <DeleteOutlineRoundedIcon
                    sx={{cursor:"pointer"}}
                    onClick={() => handleModal()}
                    />:
                    <DeleteOutlineRoundedIcon
                    sx={{cursor:"pointer"}}
                    onClick={() => handleDeleteTask()}
                    />
                }

            </div>
        </li> 
    </>
  )
}

export default TaskItem