import "./AddMeeting.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Meeting from "../../../Model/Meeting";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";


function AddMeeting(): JSX.Element {

  const [meetings, setMeetings] = useState([]);

const handleChange = (event:any) => {
  getMeetingInfo(event.target.value);        
}

const getMeetingInfo = (groupKey:number) => {
  axios
.get(`http://localhost:8080/api/v1/meetings/getGroup/3`)
.then((res) => {
  setMeetings(res.data);
})
.catch((err) => {
  console.error(err);
});
}


const addNewMeeting = (newMeeting: any) => {
    axios
      .post('http://localhost:8080/api/v1/meetings/addMeeting', newMeeting)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }



    const navigate = useNavigate();
    const {
        register,handleSubmit,formState: {errors},
    } = useForm<Meeting>();
    const send = (newMeeting: Meeting) => {
        console.log(newMeeting);
        let meetings:Meeting[]=[];
        meetings = localStorage.getItem("meetings") 
        ? JSON.parse(localStorage.getItem("meetings"))
        : [];
        meetings.push(newMeeting);
        // localStorage.setItem("meetings",JSON.stringify(meetings));
        // console.log(meetings);
        addNewMeeting(newMeeting);
        navigate("/");
    }
    
    return (
        <div className="AddMeeting">
            <form onSubmit={handleSubmit(send)}>
			            <div className="Box"><h3>Add Meeting:</h3><br/>
                  Choose Your Group:<hr/><select {...register("groupKey")} required>
                  <option value={"1"}>React Team</option>
                  <option value={"2"}>Winners Team</option>  
                  <option value={"3"}>Gamers Team</option>    
                  </select><br/><br/>
                  Start Time:<hr/><input type="text" {...register("startTime")} required /><br/><br/>
                  End Time:<hr/><input type="text" {...register("endTime")} required/><br/><br/>
                  Description:<hr/><textarea {...register("meetingDescription")} required/><br/><br/>
                  Location:<hr/><input type="text" {...register("meetingLocation")}required /><br/><br/>
                        <Button fullWidth variant="contained" type="submit">Add Meeting</Button><br/><br/>
                        <Button variant="contained" color="error" size="small">Cancel</Button><br/>
                  </div>
            </form>
        </div>
    );
}

export default AddMeeting;
