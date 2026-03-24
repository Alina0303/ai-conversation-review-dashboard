export interface Message {
  id: string;
  sender: "customer" | "ai";
  text: string;
  timestamp: string;
}

interface Notes {
  id: string;
  text: string;
}

export interface Conversation {
  id: string;
  title: string;
  city: string;
  category: string;
  status: "Pending Review" | "Approved" | "Needs Fix";
  messages: Message[];
  reviewerNote?: Notes[];
}
