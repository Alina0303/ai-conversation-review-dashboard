import { useState, type FormEvent } from "react";

interface ActionsProps {
  chatId: string | null;
  updateStatus: (
    id: string | null,
    newStatus: "Pending Review" | "Approved" | "Needs Fix",
  ) => void;
  updateReviewerNotes: (id: string | null, note: string) => void;
}
const Actions = ({
  chatId,
  updateStatus,
  updateReviewerNotes,
}: ActionsProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateReviewerNotes(chatId, inputValue);
    setInputValue("");
  };

  return (
    <div className="bg-neutral p-4 m-4 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-2rem">Actions</h2>
      <div className=" md:flex md:flex-row md:justify-between w-full">
        <div className="flex flex-col gap-2 md:border-r md:border-b-0  border-b mb-2 p-4 border-base-100 md:w-[50%]">
          <h3>Status</h3>
          <button
            onClick={() => updateStatus(chatId, "Approved")}
            className="btn btn-primary"
          >
            Approve
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => updateStatus(chatId, "Needs Fix")}
          >
            Mark as needs Fix
          </button>
        </div>
        <form className="md:w-[50%] p-4" onSubmit={handleSubmit}>
          <h3 className="mb-2">Notes</h3>
          <div className="flex flex-col gap-2 lg:flex-row">
            <input
              required
              type="text"
              className="input w-full lg:w-[80%]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="btn btn-primary"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Actions;
