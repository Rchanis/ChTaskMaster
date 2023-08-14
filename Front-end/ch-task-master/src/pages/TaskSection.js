import TaskArticle from "./TaskArticle";
import "./TaskSection.css";

const TaskSection = () => {
    return (
        <>
            <section class="task-section">
                <h3>
                    Doing
                </h3>
                <TaskArticle/>
                <TaskArticle/>
                <TaskArticle/>
            </section>
        </>
    )
}

export default TaskSection;