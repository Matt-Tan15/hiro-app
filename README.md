<div align="center">  <img src="https://icons.iconarchive.com/icons/dtafalonso/win-10x/512/Whiteboard-icon.png" width="40" alt="Logo" align="left" style="margin-right: 10px;"><h1 align="left">Hiro</h1>  </div>

A collaborative, real-time whiteboard app that enables users to draw, write, and share ideas seamlessly with others, fostering enhanced teamwork and creativity. The app features intuitive tools and real-time synchronization, ensuring a smooth and engaging collaborative experience. 

Tech Stack: - TypeScript - Next.js - React - Convex

<div align="center" style="padding-left: 20px;">  <p width="25" alt="Logo" align="left" style="margin-right: 10px;">🔗<a href="https://hiro-app-nine.vercel.app/">Hiro Live!</a></p></div>

<div align="center">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Blue_magnifying_glass_icon.svg/1200px-Blue_magnifying_glass_icon.svg.png" width="27" alt="Logo" align="left" style="margin-right: 10px;"><h2 align="left">Core Features</h2>  </div>

-   🛠️  **Whiteboard from scratch**  - Start with a blank canvas for unlimited creativity.
-   🧰   **Toolbar with Text, Shapes, Sticky Notes & Pencil** - Access versatile tools for dynamic content creation.
-   🥞  **Layering functionality**  - Stack and manage elements for a clean, organized board.
-   🗑️  **Coloring system**  - Personalize your board with a wide range of colors.
-   💾  **Real-time Database**  - Includes a robust real-time database for seamless collaboration.
-   🤝  **Real-time collaboration**  - Work with team members instantly and interactively.
-   🔐  **Auth, organizations, and invites**  - Secure work, manage teams, and invite collaborators.
-   ⭐️  **Favoriting**  - Bookmark important boards or elements for quick access.

<div align="center">  <img src="https://cdn-icons-png.freepik.com/512/6490/6490790.png" width="30" alt="Logo" align="left" style="margin-right: 10px;"><h2 align="left">Demo</h2>  </div>

### Team Boards
![Screenshot 2024-07-04 011046](https://github.com/Matt-Tan15/hiro-app/assets/91209885/ace14eb0-8b84-4031-8b41-46f42ba3810b)

### Invite Collaborators
![Screenshot 2024-07-04 015645](https://github.com/Matt-Tan15/hiro-app/assets/91209885/63337d20-6c3f-4186-8cf7-c43744af698d)

### Live Collaboration
![Screenshot 2024-07-04 015213](https://github.com/Matt-Tan15/hiro-app/assets/91209885/ba0f67a1-5004-4b5f-a9b3-30c02581616a)

<div align="center">  <img src="https://cdn-icons-png.freepik.com/512/7730/7730324.png" width="30" alt="Logo" align="left" style="margin-right: 10px;"><h2 align="left">Built With</h2>  </div>

-   **TypeScript**
-   **React**
-   **Next.js**
-   **Convex**
-   **Liveblocks**
-   **Clerk**

<div align="center">  <img src="https://cdn-icons-png.flaticon.com/512/3382/3382506.png" width="30" alt="Logo" align="left" style="margin-right: 10px;"><h2 align="left">Set up your own Hiro locally!</h2>  </div>

Follow these steps to get Hiro up and running on your machine:
### Step 1: Clone the repository

    git clone git@github.com:Matt-Tan15/hiro-app.git

### Step 2: Create an `.env` file:
Create a file in your root directory with the required environment variables

    CONVEX_DEPLOYMENT=
    NEXT_PUBLIC_CONVEX_URL=
    
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    LIVEBLOCKS_SECRET_KEY=

### Step 3: Install the dependencies

    npm i

### Step 4: Set up Convex

    npx convex dev

### Step 5: Run your app locally

    npm run dev
