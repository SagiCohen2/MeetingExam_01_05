import { useNavigate } from "react-router-dom";
import "./AddGroup.css";
import Group from '../../../Model/Group';
import { useForm } from 'react-hook-form';
import { Button } from "@mui/material";

function AddGroup(): JSX.Element {
    const navigate = useNavigate();
    const {
        register,handleSubmit,formState: {errors},
    } = useForm<Group>();
    const send = (newGroup: Group) => {
        console.log(newGroup);
        let groups:Group[]=[];
        groups = localStorage.getItem("groups") 
        ? JSON.parse(localStorage.getItem("groups"))
        : [];
        groups.push(newGroup);
        localStorage.setItem("meetings",JSON.stringify(groups));
        navigate("/");
        console.log(groups);
    }
    return (
        <div className="AddGroup">
			<form onSubmit={handleSubmit(send)}>
			    <div className="Box"><h3>Add New Group:</h3><br/>
                    Group Name:<hr/><input type="text" {...register("groupName")}required/><br/><br/>
                    <Button fullWidth variant="contained" type="submit">Add Group</Button><br/><br/>
                    <Button variant="contained" color="error" size="small">Cancel</Button><br/>
                </div>
            </form>
        </div>
    );
}

export default AddGroup;
