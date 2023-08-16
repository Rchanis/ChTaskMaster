import "./SideBar.css";

const SideBar = () => {
    return (
        <>
            <nav className="vertical-bar">
                <ul>
                    <li><a href="#Doing">Doing</a></li>
                    <li><a href="#Todo">Todo</a></li>
                    <li><a href="#Done">Done</a></li>
                    <li id="newTask"><a href="/createTask.html">Add new task &#10133</a></li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar;