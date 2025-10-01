import { Message } from "../db/Message.js";

export const createMessage = async ({message}) => {
    const messageString = typeof message === "object" ? JSON.stringify(message) : message;
    const messageDoc = new Message(
        {
           message: messageString
        }
    );
    return messageDoc.save();
}