import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';




const Modal = ({handleDeleteTask, setShowModal}) => {

    

  return (
    <div className="modal-container">
        <div className="dialog-container">
            <ClearRoundedIcon 
            sx={{alignSelf:"flex-end", backgroundColor:"black", borderRadius:"50%", cursor:"pointer"}}
            onClick={()=> setShowModal(prev => !prev)}
            />
            <img src="https://imgflip.com/s/meme/Third-World-Skeptical-Kid.jpg"/>
            <p>Did you <strong>REALLY</strong> finish this sh!t?</p>
            <button
            onClick={() => handleDeleteTask()}
            >Yes, I did</button>
            
        </div>
    </div>
  )
}

export default Modal