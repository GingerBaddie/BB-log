# BB-log App

A modern blog application built with **React** and powered by **Appwrite** as the backend. The application provides user authentication and blog management features, allowing users to create, view, and manage blog posts through a clean and responsive interface.

## Features

* User Authentication (Sign Up, Login, Logout)
* Protected Routes
* Create New Blog Posts
* View All Posts
* View Individual Post Details
* Responsive User Interface
* State Management with Redux Toolkit
* Form Handling with React Hook Form
* Backend Services using Appwrite
* Rich Text Editor Support

## Tech Stack

### Frontend

* React
* React Router DOM
* Redux Toolkit
* React Redux
* React Hook Form
* Tailwind CSS
* Vite

### Backend

* Appwrite

  * Authentication
  * Database
  * Storage

## Project Structure

```text
src/
├── appwrite/          # Appwrite service files
├── components/        # Reusable components
├── pages/             # Application pages
├── store/             # Redux store and slices
├── conf/              # Environment configuration
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later)
* npm
* Appwrite server or Appwrite Cloud project

### Installation

1. Clone the repository:

```bash
git clone https://github.com/GingerBaddie/BB-log.git
cd BB-log
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Appwrite credentials:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Environment Variables

| Variable                    | Description           |
| --------------------------- | --------------------- |
| VITE_APPWRITE_URL           | Appwrite endpoint URL |
| VITE_APPWRITE_PROJECT_ID    | Appwrite project ID   |
| VITE_APPWRITE_DATABASE_ID   | Database ID           |
| VITE_APPWRITE_COLLECTION_ID | Posts collection ID   |
| VITE_APPWRITE_BUCKET_ID     | Storage bucket ID     |
| VITE_TINYMCE_API_KEY        | TinyMCE API KEY       |

## Authentication Flow

1. User registers an account.
2. User logs in using Appwrite Authentication.
3. Authentication state is stored in Redux.
4. Protected routes become accessible after login.
5. User can create and manage blog posts.

## Future Improvements

* Edit and Delete Posts
* Search and Filter Posts
* User Profile Page
* Comments System
* Likes and Bookmarks
* Pagination
* Dark Mode

## Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Built with React and Appwrite.
