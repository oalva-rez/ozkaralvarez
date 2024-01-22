import React, { useState, useRef, useEffect } from "react";
import messageCircle from "../../assets/message-circle.svg";
import chatImg from "../../assets/chat-img.webp";
import x from "../../assets/x.svg";
import xBlue from "../../assets/x-blue.svg";
import send from "../../assets/send.svg";
import ChatMessage from "./ChatMessage";
import aiStars from "../../assets/ai-stars.svg";
import { v4 as uuidv4 } from "uuid";
export default function ChatBot() {
    const [uid, setUid] = useState(uuidv4());
    // const API_URL_BASE = "http://localhost:3000";
    const API_URL_BASE = "https://portfolio-chatbot-zaeu.onrender.com";
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);
    const [inputData, setInputData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [errorObj, setErrorObj] = useState({
        server: false,
        charLimit: false,
        emptyInput: false,
    });
    const [options, setOptions] = useState([
        "Professional Experience?",
        "Whats TrayectoAI?",
        "Favorite Programming Language?",
        "I can help you escape the matrix!",
    ]);
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
    const textareaRef = useRef(null);
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

    const handleChatSubmit = async (option = null) => {
        if (inputData.trim() === "" && !option) {
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
        let inputString = option ? option : inputData;
        setChatMessages((prev) => {
            prevMessages = [...prev, { message: inputString, sender: "user" }];
            return [...prev, { message: inputString, sender: "user" }];
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
                    userInput: inputString,
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
        textareaRef.current.focus();
    }, [chatMessages, isLoading]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isPopupOpen &&
                !document.querySelector(".popup").contains(event.target)
            ) {
                setIsPopupOpen(false);
            } else if (
                isChatBotOpen &&
                !document
                    .querySelector(".chatbot-messages")
                    .contains(event.target)
            ) {
                setIsChatBotOpen(false);
            }
        };

        // Attach the listeners on component mount.
        document.addEventListener("mousedown", handleClickOutside);

        // Detach the listeners on component unmount.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPopupOpen, isChatBotOpen]);
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
                <div className="choices">
                    {options.map((option, index) => (
                        <button
                            onClick={() => {
                                handleChatSubmit(option);
                            }}
                            key={index}
                            className="choice"
                        >
                            <img src={aiStars} alt="stars" />
                            {option}
                        </button>
                    ))}
                </div>
                <div className="input">
                    <textarea
                        rows={1}
                        placeholder="Type Your Message Here"
                        onChange={handleInputChange}
                        value={inputData}
                        disabled={isLoading}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !isLoading) {
                                event.preventDefault();
                                handleChatSubmit();
                            }
                        }}
                        ref={textareaRef}
                    ></textarea>
                    <img
                        src={send}
                        alt="send"
                        className="send"
                        onClick={() => {
                            handleChatSubmit();
                        }}
                    />
                </div>
                <div className="footer">
                    <span>Handcrafted by Ozkar | </span>
                    <a
                        href="https://github.com/oalva-rez/portfolio-chat-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Source Code
                    </a>
                </div>
            </div>
            <div
                className={
                    isChatBotOpen
                        ? "chatbot-button chat-open"
                        : "chatbot-button"
                }
                onClick={(e) => {
                    e.stopPropagation();
                    if (e.target.classList.contains("popup")) return;
                    setIsChatBotOpen(!isChatBotOpen);
                    setIsPopupOpen(false);
                }}
            >
                <img
                    src={messageCircle}
                    alt="message circle bubble"
                    className="bubble-message-icon"
                />

                <div className={isPopupOpen ? "popup open" : "popup"}>
                    Hey there! 👋 <br />
                    Chat with Ozkar.ai 🤖
                    <img
                        src={xBlue}
                        alt="close popup"
                        className="close-popup"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsPopupOpen(false);
                        }}
                    />
                </div>
            </div>
        </>
    );
}
