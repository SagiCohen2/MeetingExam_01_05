import "./SingleMeeting.css";
import Meeting from '../../../../Model/Meeting';

interface MeetingProps {
    groupKey:number;
    startTime:string;
    endTime:string;
    meetingDescription:string;
    meetingLocation:string;
}

function SingleMeeting(props:MeetingProps): JSX.Element {
    return (
        <div className="SingleMeeting Box">
                        {props.groupKey}<br/>
                        {props.startTime}<br/>
                        {props.endTime}<br/>
                        {props.meetingDescription}<br/>
                        {props.meetingLocation}<br/>
        </div>
    );
}

export default SingleMeeting;
