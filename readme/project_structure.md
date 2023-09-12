# Project Structure Documentation

This document outlines the structure of the project, providing a brief overview of the various directories and their contents.

```
.
├── components
│   ├── Article.vue               # Component for individual article representation
│   ├── ArticleList.vue           # Component to display a list of articles
│   ├── ArticlePreview.vue        # Preview component for an article
│   ├── CreateForm.vue            # Form component to create new articles
│   ├── EditForm.vue              # Form component to edit existing articles
│   ├── Footer.vue                # Footer component of the application
│   ├── Header.vue                # Header component of the application
│   ├── Logout.vue                # Component to handle user logout button
│   ├── Message.vue               # Component for displaying messages/alerts
│   ├── SignIn.vue                # Component for user sign-in page
│   └── SignUp.vue                # Component for user sign-up page
│
├── nuxt.config.ts                # Configuration file for Nuxt.js
│
├── package-lock.json             # Auto-generated file to lock down dependency versions
│
├── package.json                  # Project metadata and dependency list
│
├── pages
│   ├── account.vue               # User account page
│   ├── article
│   │   ├── [id].vue              # Individual article page, based on its ID
│   │   └── edit
│   │       └── [id].vue          # Page to edit an article, based on its ID
│   ├── blog.vue                  # Blog main page displaying articles
│   ├── create.vue                # Page to create a new article
│   ├── signin.vue                # User sign-in page
│   └── signup.vue                # User sign-up page
│
├── public
│   ├── favicon.ico               # Favicon for the web application
│   └── fox-logo.svg              # SVG logo used in the application
│
├── readme
│   ├── Nuxt 3 start.md           # Documentation on starting with Nuxt 3
│   ├── database_shema.md         # Documentation on the project's database schema
│   └── supbase_api.md            # Documentation on using the Supabase API
│
├── services
│   └── supbase_api.js            # Service file to interact with Supabase API
│
├── tailwind.config.js            # Configuration file for Tailwind CSS
│
└── tsconfig.json                 # Configuration for TypeScript in the project
```

This structure ensures a clear separation of concerns, allowing developers to easily navigate and manage different parts of the application. Components are modularized, pages are organized based on their functionality, and services ensure clean API interactions.