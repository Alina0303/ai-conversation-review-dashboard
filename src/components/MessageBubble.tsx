import type { Conversation } from "../types";
interface MessageBubbleProps {
  currentChat: Conversation | undefined;
}
const MessageBubble = ({ currentChat }: MessageBubbleProps) => {
  const messages = currentChat?.messages;

  return (
    <>
      <div className="chat">
        {messages?.map((mes) => {
          return (
            <div
              key={mes.id}
              className={`chat ${mes.sender === "ai" ? "chat-end" : "chat-start"} `}
            >
              <div className="chat-bubble">
                {mes.text}{" "}
                <p className="text-sm text-gray-500">
                  send at: {mes.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MessageBubble;
