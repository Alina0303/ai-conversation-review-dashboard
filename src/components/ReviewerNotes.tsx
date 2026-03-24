import type { Conversation } from "../types";

interface ReviewerNotesProps {
  chatId: string | null;
  conversations: Conversation[];
}
const ReviewerNotes = ({ chatId, conversations }: ReviewerNotesProps) => {
  const currentChat = conversations.find((chat) => chat.id === chatId);
  if (!currentChat?.reviewerNote) {
    return (
      <div className="bg-neutral p-4 m-4 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-2rem">No notes yet...</h2>
      </div>
    );
  }
  return (
    <div className="bg-neutral p-4 m-4 rounded-2xl">
      <ul className="list">
        <li className="list-row">
          <h2 className="text-2xl font-semibold mb-2rem capitalize">
            Reviewer notes:
          </h2>
        </li>
        {currentChat?.reviewerNote?.map((r) => {
          return (
            <li key={r.id} className="list-row">
              <p className="text-2xl font-semibold mb-2rem capitalize">
                {r.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ReviewerNotes;
