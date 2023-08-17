import TaskArticle from "./TaskArticle";
import "./TaskSection.css";
import { useSelector } from "react-redux";

const TaskSection = (props) => {
    const state = useSelector((state) => state);
    
    return (
        <>
            <section className="task-section">
                <h3>
                    {props.title}
                </h3>

                {/* map the taskSection */}
                {state.tasks[props.title].map((task) => (
                    <TaskArticle key={task.id} title={task.title} description={task.description}/>
                ))}

                {console.log(state)}
            </section>
        </>
    )
}

export default TaskSection;