# Step 4: Dynamic Data Fetching

This branch fetches blog data dynamically from a public API like jsonplaceholder.typicode.com .It replaces the mock data in the blog listing and dynamic blog post pages with API results.

---

## Features
1. **Dynamic Data Fetching**:
   - Data fetched from a server to simulate it being fetched from db
   
---

## Folder Structure
The folder structure remains unchanged, but we’ll add API integration for blog data.

---

## Setup Instructions
Follow these steps to run the app with dynamic blog pages:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GouravMidya/blog_app.git
   cd blog_app
   git checkout step_4_dynamic_data_fetching
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
![image](https://github.com/user-attachments/assets/131a0064-199b-4ed6-b633-1653f163adec)



### Dynamic Blog Post Page
![image](https://github.com/user-attachments/assets/0acc3f14-18c6-4072-85a2-83fb7cc02178)



---

## Next Steps
In **Step 5**, we will:
Make use of Card component from shadcn to beutify our ui
