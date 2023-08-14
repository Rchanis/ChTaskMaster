import "./TaskArticle.css"

const TaskArticle = () => {
    return (
        <>
            <article class="task">
                <h4>Front end</h4>
                <p>front end work for ChTaskMaster TEXT TEXT TEXT TEXT TEXT TEXT Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Beatae facere ullam ab quas distinctio unde esse! Vero exercitationem odio
                    officia, culpa distinctio voluptatibus id et nam, beatae repellat repudiandae modi?</p>
                <div>
                    <p class="undone state">&#11035</p>
                    <p class="date-task"><i>To do date:</i>10/11/2023</p>
                </div>
            </article>
        </>
    )
}

export default TaskArticle;