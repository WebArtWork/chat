const dataScript = document.getElementById("wawchatdata");
try {
	const data = JSON.parse(dataScript.textContent);
	console.log("Code Value:", data);
} catch (error) {}
// CSS Styles as a string
const styles = `
            body {
                font-family: Arial, sans-serif;
            }
            .chat-button {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                background-color: #007bff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                cursor: pointer;
                font-size: 24px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            .chat-window {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 300px;
                height: 400px;
                background-color: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                display: none;
                flex-direction: column;
            }
            .chat-header {
                background-color: #007bff;
                color: white;
                padding: 10px;
                border-radius: 8px 8px 0 0;
            }
            .chat-messages {
                flex: 1;
                padding: 10px;
                overflow-y: auto;
                border-bottom: 1px solid #ddd;
            }
            .chat-input {
                display: flex;
                padding: 10px;
            }
            .chat-input input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            .chat-input button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px;
                margin-left: 5px;
                border-radius: 4px;
                cursor: pointer;
            }
        `;

// Adding the styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Creating HTML elements for the chat widget
const chatButton = document.createElement("div");
chatButton.className = "chat-button";
chatButton.id = "chatButton";
chatButton.innerHTML = "💬";

const chatWindow = document.createElement("div");
chatWindow.className = "chat-window";
chatWindow.id = "chatWindow";
chatWindow.innerHTML = `
            <div class="chat-header">Chat</div>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="chat-input">
                <input type="text" id="chatInput" placeholder="Type a message...">
                <button onclick="sendMessage()">Send</button>
            </div>
        `;

// Appending elements to the body
document.body.appendChild(chatButton);
document.body.appendChild(chatWindow);

// JavaScript functionality
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

chatButton.addEventListener("click", () => {
	chatWindow.style.display =
		chatWindow.style.display === "none" || chatWindow.style.display === ""
			? "flex"
			: "none";
});

function sendMessage() {
	const messageText = chatInput.value;
	if (messageText.trim() !== "") {
		const message = document.createElement("div");
		message.textContent = messageText;
		chatMessages.appendChild(message);
		chatInput.value = "";
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}
}
