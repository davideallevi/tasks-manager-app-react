import Task from './Task'

const TasksListDone = ({ tasksData, onDelete, taskStatus }) => {
    
    return (
        <section>
            <h2>Done:</h2>
            <ul className="tasksList taskListDone">
                {tasksData.filter(task => task.done === true).sort(a => !a.highPriority ? 1 : -1).map(task => (
                    <Task key={task.id} task={task} onDelete={onDelete} taskStatus={taskStatus} />
                ))}
            </ul>
        </section>
    )
}

export default TasksListDone
