import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import SideBar from "./SideBar";
import TaskSection from "./TaskSection";


const Home = () => {
    return (
        <>
            <SideBar/>
            <div class="tasks">
                <TaskSection/>
                <TaskSection/>
                <TaskSection/>
            </div>

            <Outlet />
        </>
    )
}

export default Home;