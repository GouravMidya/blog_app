# Step 5: Beautify UI

In this branch, we enhanced the **blog listing** and **blog details** pages using the **ShadCN Card component** to improve the visual presentation.

---

## Features
1. **Enhanced Blog Listing Page**:
   - Each blog post is displayed within a beautifully styled card.
2. **Enhanced Blog Details Page**:
   - Blog content is displayed in a card for better readability and a back button is added to easily go back to blogs.
3. **ShadCN Integration**:
   - Used ShadCN's Card component for consistent UI styling.

---

## Folder Structure
No changes to the folder structure were made, but the `page.js` files for the blog listing and blog details pages were updated.

---

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/GouravMidya/blog_app.git
   cd blog_app
   git checkout step_5_beautify_ui
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
   - Visit [http://localhost:3000/blog](http://localhost:3000/blog) for the enhanced blog listing page.
   - Visit [http://localhost:3000/blog/1](http://localhost:3000/blog/1) for the enhanced blog details page.

---

## Key Files
1. **Updated Blog Listing Page**: `src/app/blog/page.js`
2. **Updated Blog Details Page**: `src/app/blog/[slug]/page.js`
3. **ShadCN Card Integration**: Components added directly in `page.js` files.

---

## Screenshots
### Enhanced Blog Listing Page
![image](https://github.com/user-attachments/assets/42d254c9-1615-4a18-b372-486207e3d6d4)


### Enhanced Blog Details Page
![image](https://github.com/user-attachments/assets/d627f2ef-7688-4f71-8ebe-a66231728b97)


---

## Next Steps
In **Step 6**, we will:
1. Update site metadata for title and description.
2. Deploy the application using **Vercel CLI**.
