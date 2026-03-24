## Deploy

[ai-conversation-review-dashboard](https://ai-conversation-review-dashboard.netlify.app/)

## Project Features

- Responsive Design & Tailwind: I used Tailwind CSS to make the dashboard fully responsive. The layout automatically adjusts to look great on everything from mobile phones to desktop screens.

- DaisyUI Dark Theme: I implemented a modern Dark Theme using the DaisyUI component library. This gives the dashboard a clean, professional look right out of the box.

- Form Protection: I added the required attribute to the input and a disabled state to the button. The "Save" button only activates when you type something, which prevents empty notes from being saved.

- Weather Widget with Axios:

Loading State: The widget shows a "loading skeleton" while fetching data from the API.

Error Handling: If there’s an API error or no internet, the widget displays a clear message instead of crashing.

- State Management: I focused on keeping the data structure clean by lifting the state to the main App component. This ensures that the sidebar and the chat window stay perfectly synchronized.

- Learning TypeScript: I also practiced using TypeScript to define my data types. It’s a new skill I’m learning, but I used it to make the code more reliable and organized.

## How to run the project

- npm i
- npm run dev
