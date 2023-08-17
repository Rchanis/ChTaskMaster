import "./CreateTask.css"
import { useSelector, useDispatch } from "react-redux";
import { newTask } from "../actions/taskAction";
import { useState } from "react";


const CreateTask = () => {
    const [formData, setFormData] = useState({title: "", description: "", date: "", time: ""});
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(newTask(formData.title, formData.description));
        console.log(state);
        alert(formData.time);
        
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <label>Title: <br />
                        <input type="text" value={formData.title} onChange={handleChange} name="title" id="title" />
                    </label>
                    <label>Description: <br />
                        <textarea name="description" value={formData.description} onChange={handleChange} id="description" cols={30} rows={5} />
                    </label>
                    <label>State: <br />
                        <input list="states" name="state" id="state" />
                        <datalist id="states">
                            <option value="To do" />
                            <option value="Done" />
                            <option value="Doing" />
                        </datalist>
                    </label>
                    <label>End date: <br />
                        <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
                    </label>
                    <label>Time: <br />
                        <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} />
                    </label> 
                    <input type="submit" value="create" />
                </form>
            </main>
        </>
    );
}

export default CreateTask;