import { GiHamburgerMenu } from "react-icons/gi";
import ChatWindow from "./components/ChatWindow";
import ReviewerNotes from "./components/ReviewerNotes";
import Actions from "./components/Actions";
import SidebarList from "./components/SidebarList";

import { useState } from "react";
import { MOCK_CONVERSATION } from "./data/mockData";
import { nanoid } from "nanoid";

function App() {
  const [selectedChatId, setSelectedChatId] = useState("");

  const [conversations, setConversations] = useState(MOCK_CONVERSATION);

  const updateStatus = (
    id: string | null,
    newStatus: "Pending Review" | "Approved" | "Needs Fix",
  ) => {
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, status: newStatus } : chat,
      ),
    );
  };

  const updateReviewerNotes = (id: string | null, note: string) => {
    const newNoteObject = {
      id: nanoid(),
      text: note,
    };
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? {
              ...chat,
              reviewerNote: [...(chat.reviewerNote || []), newNoteObject],
            }
          : chat,
      ),
    );
  };

  return (
    <div className="drawer md:drawer-open">
      <input
        id="my-drawer-1"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content mt-2 ml-2">
        <label
          htmlFor="my-drawer-1"
          className="btn btn-primary drawer-button md:hidden ml-4"
        >
          <GiHamburgerMenu />
        </label>
        {selectedChatId ? (
          <>
            <ChatWindow chatId={selectedChatId} />
            <ReviewerNotes
              chatId={selectedChatId}
              conversations={conversations}
            />
            <Actions
              chatId={selectedChatId}
              updateStatus={updateStatus}
              updateReviewerNotes={updateReviewerNotes}
            />
          </>
        ) : (
          <div className="bg-neutral p-4 m-4 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2rem">
              Please choose any dialog...
            </h2>
          </div>
        )}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <SidebarList
          onSelectChat={(id) => setSelectedChatId(id)}
          conversations={conversations}
        />
      </div>
    </div>
  );
}

export default App;
