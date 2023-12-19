import React from "react";
import ozkar from "../../assets/chat-img.webp";
function ChatMessage({ text, sender, secondMessage }) {
    return (
        <div
            className={
                sender === "bot" ? "chat-message bot" : "chat-message user"
            }
        >
            {!secondMessage && (
                <div className="sender">
                    {sender === "bot" ? (
                        <>
                            <img src={ozkar} alt="ozkar" />
                            <span>Ozkar.ai</span>
                        </>
                    ) : (
                        "You"
                    )}
                </div>
            )}
            <div className="message">{text}</div>
        </div>
    );
}

export default ChatMessage;
