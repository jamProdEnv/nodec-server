import {createMessage} from "./MessageService.js";
export const sendPublicMessage = (io, {message}) => {
    io.emit("chat.message", message);
    console.info("Message:", message);
    createMessage({message});
}