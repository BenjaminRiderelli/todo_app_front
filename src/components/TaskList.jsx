import TaskItem from './TaskItem';


const TaskList = ({taskList, setRefetch, setTaskList}) => {




    const taskElements = taskList?.map((task,i) => {
        // const today = new Date()
        const formattedTimeStamp = new Date(task?.fechalimite)
        const day = formattedTimeStamp.getDate()
        const month = formattedTimeStamp.getMonth() + 1
        return(
            <TaskItem
                key={task?._id + i}    
                id={task?._id}    
                text={task?.text}
                date={day + " / " + month}
                done={task?.done}
                setRefetch={setRefetch}
                setTaskList={setTaskList}
            />
            )
    })

    return (
    <section className="task-section section">
        <ul className="task-list">
            {taskElements}
        </ul>
  </section>
  )
}

export default TaskList