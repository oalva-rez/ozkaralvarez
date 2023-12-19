import React, { useState, useRef, useEffect } from "react";
import messageCircle from "../../assets/message-circle.svg";
import chatImg from "../../assets/chat-img.webp";
import x from "../../assets/x.svg";
import send from "../../assets/send.svg";
import ChatMessage from "./ChatMessage";
import { v4 as uuidv4 } from "uuid";
export default function ChatBot() {
    const [uid, setUid] = useState(uuidv4());
    const API_URL_BASE = "http://localhost:3000";
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);
    const [inputData, setInputData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorObj, setErrorObj] = useState({
        server: false,
        charLimit: false,
        emptyInput: false,
    });
    const [chatMessages, setChatMessages] = useState([
        {
            message:
                "Hey there! 👋 I'm Ozkar's digital twin, crafted with bits and bytes, but don't worry, I'm just as friendly and knowledgeable as the real deal.",
            sender: "bot",
            secondMessage: false,
        },
        {
            message: "What can I help you with?",
            sender: "bot",
            secondMessage: true,
        },
    ]);
    const scrollRef = useRef(null);

    const handleInputChange = (e) => {
        setErrorObj({
            server: false,
            charLimit: false,
            emptyInput: false,
        });
        setInputData((prev) => {
            if (e.target.value.length > 150) {
                setErrorObj((prev) => {
                    return { ...prev, charLimit: true };
                });
                return prev;
            }
            return e.target.value;
        });
    };
    const handleChatSubmit = async () => {
        if (inputData.trim() === "") {
            setErrorObj((prev) => {
                return { ...prev, emptyInput: true };
            });
            return;
        }
        setErrorObj({
            server: false,
            charLimit: false,
            emptyInput: false,
        });
        let prevMessages;
        setChatMessages((prev) => {
            prevMessages = [...prev, { message: inputData, sender: "user" }];
            console.log(prevMessages);
            return [...prev, { message: inputData, sender: "user" }];
        });

        setIsLoading(true);
        setInputData("");

        try {
            const response = await fetch(`${API_URL_BASE}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid,
                    userInput: inputData,
                }),
            });
            const data = await response.json();
            if (data.data) {
                setChatMessages([
                    ...prevMessages,
                    { message: data.data, sender: "bot", secondMessage: false },
                ]);

                setIsLoading(false);
            } else {
                setIsLoading(false);
                setErrorObj((prev) => {
                    return { ...prev, server: true };
                });
            }
        } catch (err) {
            setIsLoading(false);
            setErrorObj((prev) => {
                return { ...prev, server: true };
            });
        }
    };
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages, isLoading]);
    return (
        <>
            <div
                className={
                    isChatBotOpen
                        ? "chatbot-messages chat-open"
                        : "chatbot-messages"
                }
            >
                <div className="header">
                    <div className="ozkar-img-container">
                        <img
                            src={chatImg}
                            alt="ozkarBot"
                            className="ozkar-img"
                        />
                    </div>
                    <div className="header-text">
                        <h4>Ozkar.ai 🤖</h4>
                        <p>Online</p>
                    </div>
                    <img
                        className="close-chat"
                        onClick={() => setIsChatBotOpen(false)}
                        src={x}
                    />
                </div>
                <div className="chat-content">
                    {chatMessages.map((chatMessage, index) => (
                        <ChatMessage
                            key={index}
                            text={chatMessage.message}
                            sender={chatMessage.sender}
                            secondMessage={chatMessage.secondMessage}
                        />
                    ))}
                    {isLoading && (
                        <div className="chat-bubble">
                            <div className="typing">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    )}
                    <div ref={scrollRef} className="error">
                        {errorObj.charLimit &&
                            "Character limit of 150 exceeded"}
                        {errorObj.server && "Hmmm... Something went wrong."}
                        {errorObj.emptyInput &&
                            "You cannot leave the text area blank."}
                    </div>
                </div>
                <div className="input">
                    <textarea
                        rows={1}
                        placeholder="Type Your Message Here"
                        onChange={handleInputChange}
                        value={inputData}
                    />
                    <img
                        src={send}
                        alt="send"
                        className="send"
                        onClick={handleChatSubmit}
                    />
                </div>
                <div className="footer">
                    <a href="#">View Source Code</a>
                </div>
            </div>
            <div
                className={
                    isChatBotOpen
                        ? "chatbot-button chat-open"
                        : "chatbot-button"
                }
                onClick={() => setIsChatBotOpen(!isChatBotOpen)}
            >
                <img src={messageCircle} alt="message circle bubble" />
            </div>
        </>
    );
}
