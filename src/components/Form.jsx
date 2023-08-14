import {useState} from 'react'
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';





const Form = ({formData, handleChange, submit, isDone, handleCheckBox}) => {


  return (
    <section className="form-section section">
        <form 
        className="form-container">
            <div className="form">
                <label 
                className="checkbox-input" 
                htmlFor="checkbox">
                    {
                        isDone?
                        <>
                        <DoneAllRoundedIcon />
                        </>:
                        <CheckCircleOutlineOutlinedIcon />
                    }
                <input
                    hidden
                    name="done" 
                    id="checkbox" 
                    type="checkbox"
                    checked={isDone}
                    onChange={handleCheckBox}
                    />
                </label>
                <input
                required
                name="text" 
                type="text"
                value={formData.text}
                onChange={handleChange} 
                className="text-input" />
                <input
                required
                name="fechalimite" 
                value={formData.fechalimite}
                type="date" 
                onChange={handleChange} 
                className="date-input" />
            </div>
            <div             
            className="form-button-container">
                <button
                    onClick={(e, formData)=>{submit(e, formData)}}
                >ADD SH!T TO DO</button>
            </div>
        </form>
    </section>
  )
}

export default Form