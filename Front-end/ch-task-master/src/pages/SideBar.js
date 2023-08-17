import "./SideBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const state = useSelector((state) => state);
    return (
        <>
            <nav className="vertical-bar">
                <ul>
                    {/* map the tasks sections */}
                    {Object.keys(state.tasks).map((taskSection) => (
                        <li key={taskSection.id}>{taskSection}</li>
                    ))}
                    <li id="newTask"><Link to="/createTask">Add new task &#10133</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar;