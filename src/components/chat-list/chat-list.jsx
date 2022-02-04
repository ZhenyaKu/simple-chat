import './chat-list.scss';
import { useRef, useEffect } from 'react';

export default function ChatList({ messages }) {
    const isEmpty = messages.length === 0;
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef?.current?.children?.[messages.length - 1]?.scrollIntoView();
    }, [chatRef, messages]);

    if (isEmpty) {
        return <p className="chat_empty"> No messages</p >
    }

    return <div className="chat">
        <div className="chatList" ref={chatRef}>
            {messages.map(({ message, date }, index) => {
                return <div className="chatList_content" key={index}>
                    <div className="chatList_message">{message}</div>
                    <div className="chatList_date">{date}</div>
                </div>
            })}
        </div>
    </div>

}