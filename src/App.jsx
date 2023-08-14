
import {useState,useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import TaskList from './components/TaskList';


function App() {

  const [formData, setFormData] = useState({
    text:"",
    fechalimite:new Date().toISOString().slice(0, 10)
   })
  const [isDone, setIsDone] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const [taskList, setTaskList] = useState([])


  const url = 'http://localhost:3000/todos'
  useEffect(
      ()=>{
       fetch(url)
      .then(res => res.json())
      .then(data => {
        setTaskList(data)
      })
      .catch(error => console.log(error.message))
  },[refetch])



  function handleChange(e){
    const {value, name} = e.target
    setFormData(prevData => {
        return{
            ...prevData,
            [name]:value

        }
    })
}

function submit(e){
    
    if(!formData.fechalimite){return}
    if(!formData.text){return}

    e.preventDefault()
    setFormData({
      fechalimite:new Date().toISOString().slice(0, 10),
      text:"",
      done:false
    })
    setIsDone(false)
    setTaskList(prevState => [...prevState, {...formData}])        
    
   fetch(url,{
    method:'POST',
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(formData)
   })
   .then(res => {res.json()})
   .then(data => {
    setRefetch(prevState => !prevState)
  })   
}


function handleCheckBox() {
  setIsDone(!isDone)
  setFormData(prevData => {
      return{
          ...prevData,
          done:!isDone
      }
  })
}





  return (
    <div className="app-container">
      <section className="title-section section">
        <h1>GET SH!T DON3</h1>
      </section>
      <Form
      formData={formData}
      submit={submit}
      handleChange={handleChange}
      handleCheckBox={handleCheckBox}
      isDone={isDone}
      />
      <TaskList
      taskList={taskList}
      setRefetch={setRefetch}
      setTaskList={setTaskList}
      />
    </div>
  );
}

export default App
