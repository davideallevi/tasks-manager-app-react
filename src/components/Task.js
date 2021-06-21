import iconTrash from '../assets/icon-trash.svg'

const Task = ({ task, onDelete, taskStatus }) => {
    return (
        <li className="task">
            <input className="doneCheck" type="checkbox" checked={task.done} value={task.done} onChange={() => taskStatus(task.id)} ></input>
            <div className={(task.highPriority) ? "highPriorityOn" : "highPriorityOff"}></div>
            <h3>{task.text}</h3>
            <img src={iconTrash} alt="" onClick={() => onDelete(task.id)} style={{cursor: "pointer"}}/>
        </li>
    )
}

export default Task