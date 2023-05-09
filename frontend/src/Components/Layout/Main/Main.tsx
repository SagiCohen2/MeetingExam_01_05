import { useEffect, useState } from "react";
import "./Main.css";
import Meeting from "../../../Model/Meeting";
import SingleMeeting from "../AddMeeting/SingleMeeting/SingleMeeting";
import axios from 'axios';
import Group from "../../../Model/Group";
import SingleGroup from "../AddGroup/SingleGroup/SingleGroup";
import { Request,Response,NextFunction} from 'express';


function Main(): JSX.Element {

    const [meetings, setMeetings] = useState([]);

    const handleChange = (event:any) => {
        const selectedGroupKey = event.target.value;
        getMeetingInfo(selectedGroupKey);  
    }

    const getMeetingInfo = (key: number) => {
        setMeetings([]); // clear the previous meetings
        axios
          .get(`http://localhost:8080/api/v1/meetings/getGroup/${key}`)
          .then((res) => {
            const meetings = res.data;
            setMeetings(meetings);
          })
          .catch((err) => {
            console.error(err);
          });
      };

    const [groups, setGroups] = useState<Group[]>([]);
    useEffect (() => { 
        axios.get(`http://localhost:8080/api/v1/meetings/allGroups`)
        .then((response) => {
            setGroups(response.data);
            console.log("Data is on air, enjoy!")
        });
    },[]);
    
    return (
        <div className="Main">
			<h1>Exam - Meetings</h1><br/>
            <h2>Choose your Group<br/> Check your upcoming Meetings!</h2><hr/>
            <div className="Box">
                <select onChange={handleChange}>
                    <option selected disabled>Choose Group</option>
                    {groups.map((item) =>(
                        <option value={item.groupKey}>{item.groupName}</option> 
                    ))}
                </select>
            </div>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Start Time</td>
                        <td>End Time</td>
                        <td>Description</td>
                        <td>Location</td>
                    </tr>
                </thead>
                <tbody>
                    {meetings.map((item) => (
                        <tr key={item["groupKey"]}>
                            <td>{item["meetingKey"]}</td>
                            <td>{item["startTime"]}</td>
                            <td>{item["endTime"]}</td>
                            <td>{item["meetingDescription"]}</td>
                            <td>{item["meetingLocation"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
