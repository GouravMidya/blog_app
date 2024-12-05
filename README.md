# Step 3: Dynamic Blog Page

This branch introduces a **dynamic blog page** to the project using **folder-based routing** in the Next.js `app/` directory. It demonstrates how to build pages with dynamic parameters.

---

## Features
1. **Dynamic Routing**:
   - Blog post URLs are dynamically generated based on the `slug` parameter (e.g., `/blog/post-1`).
   - Routes are managed using the `[slug]/` folder structure.
2. **Mock Data**:
   - Blog data is sourced from an in-memory array for simplicity.

---

## Folder Structure
```
src/
├── components/
│   └── ui/
│       ├── Button.js    # Reusable button
│       └── NavBar.js    # Navigation bar with Blog link
└── app/
    ├── blog/
    │   ├── page.js      # Blog listing page
    │   └── [slug]/      # Dynamic routing folder
    │       └── page.js  # Dynamic blog post page
    ├── layout.js        # Root layout with NavBar
    ├── page.js          # Home page
    ├── about/
        └── page.js      # About page
```

---

## Setup Instructions
Follow these steps to run the app with dynamic blog pages:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GouravMidya/blog_app.git
   cd blog_app
   git checkout step_3_dynamic_blog_page
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
   - Visit [http://localhost:3000/blog](http://localhost:3000/blog) for the blog listing page.
   - Visit [http://localhost:3000/blog/post-1](http://localhost:3000/blog/post-1) for the first blog post.

---

## Key Files
1. **Blog Listing Page**: `src/app/blog/page.js`
2. **Dynamic Blog Post Page**: `src/app/blog/[slug]/page.js`

---

## Screenshots
### Blog Listing Page
![image](https://github.com/user-attachments/assets/e81d1e54-8f38-4278-8547-4fd3da9dd572)


### Dynamic Blog Post Page
![image](https://github.com/user-attachments/assets/8b50ebed-2319-4feb-9a64-63b3f4bde5ba)


---

## Next Steps
In **Step 4**, we will:
1. Replace mock data with **dynamic API fetching** using fetch method.
