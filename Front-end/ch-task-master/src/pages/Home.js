import { Outlet } from "react-router-dom";
import "./Home.css";
import SideBar from "./SideBar";
import TaskSection from "./TaskSection";
import { useSelector } from "react-redux";


const Home = () => {
    const state = useSelector((state) => state);
    return (
        <>
            <SideBar/>
            <div className="tasks">
                <TaskSection title="tasks"/>
                
            </div>

            <Outlet />
        </>
    )
}

export default Home;