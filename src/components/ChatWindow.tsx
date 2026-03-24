import MessageBubble from "./MessageBubble";
import { MOCK_CONVERSATION } from "../data/mockData";
import type { Conversation } from "../types";
import WeatherWidget from "./WeatherWidget";
interface ChatWindowProps {
  chatId: string | null;
}

function ChatWindow({ chatId }: ChatWindowProps) {
  const currentChat: Conversation | undefined = MOCK_CONVERSATION.find(
    (item) => item.id === chatId,
  );

  return (
    <div className="bg-neutral p-4 m-4 rounded-2xl">
      <div className="flex justify-between border-b border-base-100 pb-2 mb-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2rem">
            {currentChat?.title}
          </h2>
          <p>{currentChat?.category}</p>
        </div>
        <div>
          <WeatherWidget city={currentChat?.city} />
        </div>
      </div>
      <MessageBubble currentChat={currentChat} />
    </div>
  );
}
export default ChatWindow;
