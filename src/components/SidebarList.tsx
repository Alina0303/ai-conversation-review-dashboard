import type { Conversation } from "../types";

interface SidebarListProps {
  onSelectChat: (id: string) => void;
  conversations: Conversation[];
}

const SidebarList = ({ onSelectChat, conversations }: SidebarListProps) => {
  const statusStyles: Record<string, string> = {
    Approved: "bg-success",
    "Pending Review": "bg-warning",
    "Needs Fix": "bg-error",
  };
  return (
    <ul className=" bg-base-200 min-h-full min-w-90 p-4 lg:w-150">
      <h2 className="text-4xl font-bold mb-4">Conversations</h2>
      {conversations.map(({ id, title, status, messages }) => {
        const last_time_item = messages.length - 1;
        return (
          <li
            onClick={() => onSelectChat(id)}
            key={id}
            className="flex flex-row justify-between p-4 bg-neutral mb-2 rounded-2xl hover:bg-secondary transition-all cursor-pointer "
          >
            <div className="flex flex-col items-start">
              <h3>{title}</h3>
              <p className="text-sm text-gray-500">
                Last message at: {messages[last_time_item].timestamp}
              </p>
            </div>
            <div>
              <span
                className={`rounded-sm p-1 text-neutral ${statusStyles[status]}`}
              >
                {status}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default SidebarList;
