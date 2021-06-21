import Task from './Task'

const TasksList = ({ tasksData, onDelete, taskStatus }) => {
    
    return (
        <section>
            <h2>In progress:</h2>
            <ul className="tasksList">
                {tasksData.filter(task => task.done === false).sort(a => !a.highPriority ? 1 : -1).map(task => (
                    <Task key={task.id} task={task} onDelete={onDelete} taskStatus={taskStatus} />
                ))}
            </ul>
        </section>
    )
}

export default TasksList
