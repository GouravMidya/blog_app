# Step 2: Navigation Bar

This branch introduces a **navigation bar** to the project, enabling seamless navigation between pages using folder-based routing in Next.js. The navigation bar is styled with Tailwind CSS and built as a reusable component.

---

## Features
1. **Navigation Bar**:
   - Includes links to the "Home" and "About" pages.
   - Built with Tailwind CSS for styling.
   - Reusable as part of the global layout.
2. **Updated Layout**:
   - Navigation bar is included in the root layout (`layout.js`).

---

## Folder Structure
```
src/
├── components/
│   └── ui/
│       ├── Button.js    # Reusable button
│       └── NavBar.js    # New navigation bar component
└── app/
    ├── layout.js        # Root layout with NavBar
    ├── page.js          # Home page
    ├── about/
        └── page.js      # About page
```

---

## Setup Instructions
Follow these steps to run the app with the navigation bar:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GouravMidya/blog_app.git
   cd blog_app
   git checkout step_2_navbar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   - Visit [http://localhost:3000](http://localhost:3000) for the home page.
   - Visit [http://localhost:3000/about](http://localhost:3000/about) for the about page.

---

## Key Files
1. **Navigation Bar**: `src/components/ui/NavBar.js`
2. **Updated Layout**: `src/app/layout.js`

---

## Screenshots
### Navigation Bar
![image](https://github.com/user-attachments/assets/44f6dc17-0249-4dc7-872f-101e29af640b)

---

## Next Steps
In **Step 3**, we will:
1. Create a **dynamic blog page** with routing parameters (e.g., `/blog/:slug`).
2. Use Next.js dynamic routing to demonstrate key functionality.
