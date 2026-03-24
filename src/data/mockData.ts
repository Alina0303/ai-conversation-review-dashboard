import type { Conversation } from "../types";
import { nanoid } from "nanoid";
export const MOCK_CONVERSATION: Conversation[] = [
  {
    id: nanoid(),
    title: "Some question 1",
    status: "Pending Review",
    city: "London",
    category: "Logistics",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "Some problems ",
        timestamp: "10.05",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Some solving",
        timestamp: "10.06",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "Thank you",
        timestamp: "10.08",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Some question 2",
    status: "Approved",
    city: "Paris",
    category: "Billings",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "Some problems with",
        timestamp: "10.05",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Some solving",
        timestamp: "10.06",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "Thank you",
        timestamp: "10.09",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Some question 3",
    status: "Needs Fix",
    city: "Berlin",
    category: "Technical",
    messages: [
      {
        id: nanoid(),
        sender: "customer",
        text: "Some problems",
        timestamp: "10.05",
      },
      {
        id: nanoid(),
        sender: "ai",
        text: "Some solving",
        timestamp: "10.06",
      },
      {
        id: nanoid(),
        sender: "customer",
        text: "Thank you",
        timestamp: "10.07",
      },
    ],
  },
];
