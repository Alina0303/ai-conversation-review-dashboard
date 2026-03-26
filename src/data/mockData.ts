import type { Conversation } from "../types";
import { nanoid } from "nanoid";
export const MOCK_CONVERSATION: Conversation[] = [
  {
    id: nanoid(),
    title: "Billing Issues",
    status: "Pending Review",
    city: "London",
    category: "Logistics",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "Hi, I just checked my bank statement and it looks like I was charged twice for my subscription this month. Can you fix this?",
        timestamp: "10.05",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "I’m sorry for the trouble! Let me pull up your account. Yes, I see two identical transactions from this morning.",
        timestamp: "10.06",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "Great, I'd like a refund for the second charge as soon as possible, please.",
        timestamp: "10.08",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Absolutely. I have just processed the refund for the duplicate $29 charge. You should see it back in your account within 3 to 5 business days.",
        timestamp: "10.09",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Logistics",
    status: "Approved",
    city: "Paris",
    category: "Billings",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "My tracking status says my order was delivered two hours ago, but there is nothing at my door. Where is my package?",
        timestamp: "07.14",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "I apologize for the confusion. Sometimes couriers mark items as delivered prematurely. Could you check if it was left with a neighbor or in a secure mailroom?",
        timestamp: "07.15",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "I checked with my neighbors and the mailroom, but it's not there; however, the courier just arrived now with the box—it seems they just updated the system early!",
        timestamp: "07.16",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Technical Problems",
    status: "Needs Fix",
    city: "Berlin",
    category: "Technical",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "I'm trying to upload a PDF to the portal, but I keep getting an 'Upload Failed' error. What’s going on?",
        timestamp: "18.00",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Hello! This usually happens if the file exceeds our 25MB limit or if your session has timed out. How large is the file?",
        timestamp: "18.01",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "It’s only 5MB, so size isn't the issue. I've tried refreshing the page three times already.",
        timestamp: "18.02",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Understood. Please try opening the portal in an Incognito/Private window to rule out a browser extension conflict.",
        timestamp: "18.03",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "That actually worked! It uploaded immediately in the private window. Thanks for the tip!",
        timestamp: "18.04",
      },
    ],
  },
];
