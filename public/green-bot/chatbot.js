function sendMessage() {
    const input = document.getElementById("chatInput");
    const userMessage = input.value.trim();
    if (!userMessage) return;

    input.value = "";

    const chatArea = document.getElementById("chatArea");

    // نمایش پیام کاربر
    const userChat = document.createElement("div");
    userChat.className = "chat-bot";
    userChat.style.justifyContent = "flex-end";
    userChat.innerHTML = `
        <p class="question" dir="rtl" style="background-color:#025A4A; color:white; border-radius:15px 15px 0px 15px;">
            ${userMessage}
        </p>
        <div><img src="../assets/images/profile-user.svg" alt="you" class="imgbot"></div>
    `;
    chatArea.appendChild(userChat);

    let reply = "متوجه نشدم. لطفاً سوالت رو واضح‌تر بپرس.";

    const loweredMessage = userMessage.toLowerCase();

    if (loweredMessage.includes("سلام") && loweredMessage.includes("قیمت")) {
        reply = "سلام! برای قیمت لطفاً محصول رو مشخص کن.";
    } else if (loweredMessage.includes("سلام")) {
        reply = "سلام! چطور می‌تونم کمکت کنم؟";
    }

    // نمایش پاسخ ربات
    const botReply = document.createElement("div");
    botReply.className = "chat-bot";
    botReply.innerHTML = `
        <div><img src="../assets/images/bot.svg" alt="bot" class="imgbot"></div>
        <p class="question" dir="rtl">${reply}</p>
    `;
    chatArea.appendChild(botReply);

    chatArea.scrollTop = chatArea.scrollHeight;
}

// فعال‌سازی ارسال پیام با کلید Enter
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chatInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});
