import { sendAx } from "../utils";
const noteList = "/api/note_list";


export const NoteList = (data: any) => {
  return sendAx(noteList, data);
};