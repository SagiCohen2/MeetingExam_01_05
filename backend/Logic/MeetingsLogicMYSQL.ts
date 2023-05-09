import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'
import { response } from 'express';
import Meeting from '../Models/Meeting';

const addMeeting = async (newMeet:Meeting) => {
    // SQL command for adding Meeting
    const SQLcommand = `INSERT INTO exam.meetings
    (groupKey, startTime, endTime, meetingDescription, meetingLocation) 
    VALUES 
    ('${newMeet.groupKey}', 
    '${newMeet.startTime}', 
    '${newMeet.endTime}', 
    '${newMeet.meetingDescription}', 
    '${newMeet.meetingLocation}');`;
    const result:OkPacket = await dal_mysql.execute(SQLcommand);
    return result.insertId;
}

const getMeetById = async (id:number) => {
    const SQLcommand = `SELECT * FROM exam.meetings WHERE groupKey = ${id}`;
        return await dal_mysql.execute(SQLcommand);
}

const getAllGroup = async () => {
    const SQLcommand = `SELECT * FROM exam.groupss;`;
    return await dal_mysql.execute(SQLcommand);
}

const createGroupsTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS exam.groupss (
        groupKey INT NOT NULL AUTO_INCREMENT,
        groupName VARCHAR(90) NOT NULL UNIQUE,
        PRIMARY KEY (groupKey));`;
        const response = dal_mysql.execute(SQLcommand);
}

const createMeetingTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS exam.meetings (
        id INT NOT NULL AUTO_INCREMENT,
        startTime VARCHAR(45) NOT NULL,
        endTime VARCHAR(45) NOT NULL,
        description VARCHAR(128) NOT NULL,
        location VARCHAR(45) NOT NULL,
        PRIMARY KEY (id));`;
    const response = dal_mysql.execute(SQLcommand);
}

export default {
    addMeeting,
    createGroupsTable,
    createMeetingTable,
    getAllGroup,
    getMeetById,
}


