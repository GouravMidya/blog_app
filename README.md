# Step 6: Deployment

In this branch, we prepared the project for production by:
1. **Updating Site Metadata**:
   - Updated the site title and description in the root layout for better explaination.
2. **Deploying the Project**:
   - Deployed the application using **Vercel CLI** for live hosting.

---

## Features
1. **Metadata Updates**:
   - Updated site title to "Blog App".
   - Updated site description for SEO purposes.
2. **Vercel Deployment**:
   - Configured and deployed the application to Vercel.

---

## Folder Structure
No changes were made to the folder structure, but the following files were updated:
1. `src/app/layout.js`: Updated metadata.

---

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/GouravMidya/blog_app.git
   cd blog_app
   git checkout step_6_deployment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Deploy the project**:
   - Install Vercel CLI:
     ```bash
     npm install -g vercel
     ```
   - Login to Vercel:
     ```bash
     vercel login
     ```
   - Deploy the app:
     ```bash
     vercel
     ```
   - Follow the prompts to deploy the app to Vercel.

5. **Access the live project**:
   - Vercel will provide a live URL upon deployment.

---

## Key Files
1. **Updated Metadata**: `src/app/layout.js`.

---

## Screenshots
### Live Deployment
![image](https://github.com/user-attachments/assets/e65cd919-0e74-4faf-adca-4100033982d8)

---

## Next Steps
The application is now live! I encourage participants to:
- Explore the blog app.
- Contribute new features or fixes.
- Fork and deploy your own versions.
