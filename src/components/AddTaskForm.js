import { useState } from "react"

const AddTaskForm = ({ onAdd }) => {

    const [text, setText] = useState("")
    const [highPriority, setHighPriority] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add task')
            return
        }

        onAdd({ text, highPriority })

        setText("")
        setHighPriority(false)
    }

    return (
        <div className="addTask">
            <form onSubmit={onSubmit} className="addTaskForm">
                <input className="input inputText" type="text" placeholder="Insert task title" value={text} onChange={(e) => setText(e.target.value)}></input>
                <div className="highPriority">
                    <p>Hight priority</p>
                    <label className="switch switchHighPriority">
                        <input className="input inputCheckbox" type="checkbox" checked={highPriority} value={highPriority} onChange={(e) => setHighPriority(e.currentTarget.checked)}></input>
                        <span class="switchSlider"></span>
                    </label>
                </div>
                <div class="btnRight">
                    <button type="submit" className="btn">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskForm
