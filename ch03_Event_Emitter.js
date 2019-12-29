'use strict'

const EventEmitter = require('events')

class ChatManager extends EventEmitter {}
const chatManager = new ChatManager()

chatManager.on("join", () => {
    console.log("New User Joined")
})

chatManager.emit("join")