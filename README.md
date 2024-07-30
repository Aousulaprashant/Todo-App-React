# To Do App

click here to Visit Live Site ->  https://prashanths-todo-app02.netlify.app/

## Overview

The To Do App is a React-based web application that allows users to manage their tasks effectively. The application supports creating, updating, and deleting tasks, as well as searching and filtering tasks based on their status and search queries. The tasks are displayed in an expandable list format, showing detailed information such as description and last update time when expanded.

### System Design

- **Frontend**: The application is built with React, utilizing functional components and hooks for state management and side effects.
- **Data Storage**: A local JSON file (`/task.json`) is used to simulate data storage and retrieval.
- **User Interface**: The UI is designed to be responsive, with components for task management and dynamic updates.

## Implementation

### Components

1. **`Homs` Component**: 
   - Manages the main functionality including fetching tasks, filtering, searching, and handling task addition.
   - Uses `useEffect` for data fetching and URL parameter management.
   - Contains logic for displaying tasks and handling task creation, updating, and deletion.

2. **`Task` Component**:
   - Displays individual task details.
   - Supports task expansion to show additional details and editing functionality.
   - Provides checkboxes for marking tasks as completed and icons for editing or deleting tasks.

### Key Features

- **Add Task**: Opens an input box for users to add new tasks.
- **Update Task**: Allows users to edit task details by expanding the task view.
- **Delete Task**: Provides a delete icon for removing tasks.
- **Search and Filter**: Implements search functionality and filter options to manage task visibility.
- **Expandable List**: Shows task details including description and last updated time when expanded.

## Setup and Running the Application

### Prerequisites

- npm should be installed on your system.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Aousulaprashant/Todo-App-React.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd todo-app-react
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Development Server**:

   ```bash
   npm start
   ```

2. **Open the Application**:

   Navigate to `http://localhost:3000` in your web browser to view the application.

### Configuration

- **Task Data**: The application uses a local JSON file located at `/public/task.json` for task data. Ensure this file is properly configured with task data in JSON format.

## Usage

- **Add New Task**: Click the "Add" button to open the input box, enter the task details, and submit the form.
- **Edit Task**: Click on a task title to expand it and enter edit mode.
- **Delete Task**: Click the delete icon to remove a task.
- **Search Tasks**: Use the search input to filter tasks based on title.
- **Filter Tasks**: Use the filter dropdown to view tasks based on their status (All, Completed, Incomplete).

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements or bug fixes.

## Acknowledgements

- **React**: For the powerful library used to build the user interface.
- **React Icons**: For the icons used in the application.
