import "./TaskArticle.css"

const TaskArticle = (props) => {
    return (
        <>
            <article className="task">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div>
                    <p className="undone state">&#11035</p>
                    <p className="date-task"><i>To do date:</i>10/11/2023</p>
                </div>
            </article>
        </>
    )
}

export default TaskArticle;