import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import MeetingsLogicMYSQL from "../Logic/MeetingsLogicMYSQL";
import cors from "cors";
// witch parameters I need? =>

// addMeet      => POST
// editMeet - ? => PUT
// deleteMeet   => DELETE
// groupList    => GET
// meetingById  => GET

const router = express.Router();

//POST Method check
router.get(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
    console.log(`checkOK`)
  }
);

router.post(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
    console.log(`checkOK`)
  }
);

// Add new meeting
router.post(
    "/addMeeting",
    async (request:Request, response:Response, next:NextFunction) => {
        const newMeet = request.body;
        const result = await MeetingsLogicMYSQL.addMeeting(newMeet);
        console.log("Request Body: ", newMeet);
        response.status(201).json(result);
    }
);

// Get meeting by id
router.get(
  "/getGroup/:id",
  async (request:Request, response:Response, next:NextFunction) => {
    response.status(200).json(await MeetingsLogicMYSQL.getMeetById(+request.params.id));
  }
);


// Get all vacations
router.get(
    "/allGroups",
    async (request:Request, response:Response, next:NextFunction) => {
        response.status(201).json(await MeetingsLogicMYSQL.getAllGroup())
        console.log("All Groups")
      }
);

export default router;