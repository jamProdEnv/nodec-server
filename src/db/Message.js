import mongoose, {Schema } from "mongoose";

const messageSchema = new Schema({
    message: {type: String, required: true},
})

export const Message = mongoose.model("message", messageSchema);