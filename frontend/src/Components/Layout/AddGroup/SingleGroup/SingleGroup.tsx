import "./SingleGroup.css";

interface GroupsProps {
    idGroup:number;
    groupName:string;
}

function SingleGroup(props:GroupsProps): JSX.Element {
    return (
        <div className="SingleGroup Box">
			{props.idGroup}<br/>
            {props.groupName}
        </div>
    );
}

export default SingleGroup;
