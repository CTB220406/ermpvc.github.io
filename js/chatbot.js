
function ChatHeigh(){
    document.getElementById("messageInput").style.height = "100%"; // Restablecer altura inicial
    const oldHeight = document.getElementById("messageInput").clientHeight; 
    // Obtener la altura disponible en el chatBox
    const maxHeight = document.getElementById("ChatBoxArea").clientHeight * 0.4; // Máximo: 40% del chatBox

    // Ajustar la altura del textarea sin superar el límite
    const newHeight = Math.min(messageInput.scrollHeight, maxHeight);
    document.getElementById("messageInput").style.height = newHeight + "px";
    document.getElementById("messageInput").style.transform = `translateY(${oldHeight - newHeight}px)`;
}

async function SendMessage(){
    const s = document.getElementById("messageInput").value; 

    const div = document.createElement("div");
    div.classList.add("message-left");
    div.className = "message-left";
    div.innerText = s;
    document.getElementById("ChatMsgArea").appendChild(div); 
    document.getElementById("ChatMsgArea").scrollTop = document.getElementById("ChatMsgArea").scrollHeight;

    const response = await fetch("https://api-inference.huggingface.co/models/UserHuggingFaceName/my-test4-mistral", {
        method: "POST",
        headers: {
            "Authorization": "Bearer ",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: "3 tips para ser saludable" })
    });
  
    const result = await response.json();

    const div2 = document.createElement("div");
    div2.classList.add("message-right");
    div2.className = "message-right";
    div2.innerText = result;
    document.getElementById("ChatMsgArea").appendChild(div2); 
    document.getElementById("ChatMsgArea").scrollTop = document.getElementById("ChatMsgArea").scrollHeight;
}

document.getElementById("messageInput").addEventListener("keydown", async function(event) 
{
    const msg = document.getElementById("messageInput").value.trim(); 

    if (event.key === "Enter" && msg === ""){
        event.preventDefault();
        document.getElementById("messageInput").value = "";
    }
    
    if (event.key === "Enter" && msg !== "")
    {
        event.preventDefault();
        SendMessage(); 

        /*const response = await fetch(`${server}/AddMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User": USER, 
                "Authorization": token
            },
            body : JSON.stringify({
                userid: FocusUser, 
                message: msg
            })
        });

        LoadMessage(); */
        document.getElementById("messageInput").value = "";
        ChatHeigh();
    }
});

document.getElementById("messageInput").addEventListener("input", async () => {
    ChatHeigh();
});
