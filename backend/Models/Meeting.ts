class Meeting {
    public groupKey:number;
    public startTime:string;
    public endTime:string;
    public meetingDescription:string;
    public meetingLocation:string;

constructor(
    groupKey:number,startTime:string,endTime:string,meetingDescription:string,meetingLocation:string
    )
    {
    this.groupKey=groupKey,
    this.startTime=startTime;
    this.endTime=endTime;
    this.meetingDescription=meetingDescription;
    this.meetingLocation=meetingLocation;
}
    
}

export default Meeting;