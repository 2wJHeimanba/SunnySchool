import { FC,ReactElement } from "react";
import { Route } from "react-router-dom"
import TabBar from "../../components/home/tabBar"
import './home.css'
import TaskList from "../taskList";

const Home:FC = ():ReactElement => {

    return (
        <div className="home-box">
            <div className="home-content">
                {/* <Route path="mytask" element={<TaskList />} /> */}
            </div>
            <div className="home-tab">
                <TabBar />
            </div>
        </div>
    )
}

export default Home