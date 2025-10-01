import { sendPublicMessage } from "./service/ChatService.js";

export function handleSocket(io){
    io.on("connection", socket => {
        
        socket.emit("connected");
        socket.on("chat.message", ({message}) => {
            console.log("Chat Message Received:", message);
            sendPublicMessage(io, {message});
            console.info("Message Object: ", { message });
            
        });
    });
}