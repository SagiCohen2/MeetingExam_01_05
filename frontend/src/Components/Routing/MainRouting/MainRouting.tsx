import { Route,Routes } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddMeeting from "../../Layout/AddMeeting/AddMeeting";
import Page404 from "../../Pages/Page404/Page404";
import "./MainRouting.css";
import AddGroup from "../../Layout/AddGroup/AddGroup";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/AddMeeting" element={<AddMeeting/>}/>
                <Route path="/AddGroup" element={<AddGroup/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRouting;
