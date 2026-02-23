import { io } from "socket.io-client";
import readline from "readline";

const socket = io("http://localhost:3000");

// create terminal input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on("connect", () => {
  console.log("✅ Connected to server");
  promptMessage();
});

// receive messages from server
socket.on("reply", (msg) => {
  console.log(`\n📩 Server: ${msg}`);
  promptMessage();
});

// function to keep asking for input
function promptMessage() {
  rl.question("You: ", (message) => {
    socket.emit("chatMessage", message);
  });
}
