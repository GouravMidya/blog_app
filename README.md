# Step 1: Skeleton App

This branch represents the foundation of our project: a basic **Next.js app** using **folder-based routing** with the `app/` directory and **ShadCN UI components** integrated with Tailwind CSS. 

## Features
1. **Folder-Based Routing**:
   - `app/` directory structure for pages and layouts.
2. **Global Layout**:
   - Centralized layout for shared styling.
3. **Reusable UI Components**:
   - ShadCN `Button` component styled with Tailwind CSS.

---

## Folder Structure
```
blog_app/
├── public/
├── src/
│   ├── globals.css      # Global Tailwind CSS styles
│   ├── components/
│   │   └── ui/  # Reusable ShadCN components
│   └── app/
│       ├── layout.js    # Root layout for the app
│       ├── page.js      # Home page
│       ├── about/       # About page
│       │   └── page.js
├── package.json
├── .eslintrc.json
├── .gitignore
└── tailwind.config.js
```

---

## Setup Instructions
Follow these steps to run the skeleton app:

1. **Clone the repository**:
   ```bash
   git clone [<repository_url>](https://github.com/GouravMidya/blog_app.git)
   cd blog_app
   git checkout step_1_skeleton_app
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
1. **Home Page**: `src/app/page.js`
2. **About Page**: `src/app/about/page.js`
3. **Global Layout**: `src/app/layout.js`
4. **Reusable Button**: `src/components/ui/Button.js`

---

## Screenshots
### Home Page
![image](https://github.com/user-attachments/assets/f36c6d05-9fa3-42f4-9dd8-39df600aab85)

### About Page
![image](https://github.com/user-attachments/assets/fa3a12b4-882f-4b45-badd-358438d2f6f7)

---

## Next Steps
In **Step 2**, we will:
- Add a **navigation bar** with links to the "Home" and "About" pages.
- Improve the user experience using ShadCN components.

