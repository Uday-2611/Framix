# Framix 🎨

**Where Artificial Intelligence Meets Artistic Expression.**

Framix is a next-generation creative platform that empowers designers, artists, and dreamers to transform rough sketches into stunning, polished visuals in real-time. By combining an infinite workspace with state-of-the-art generative AI, Framix bridges the gap between imagination and reality.

---

## 🚀 What is Framix?

Framix is more than just a drawing tool; it's a creative partner. It provides a collaborative, infinite canvas where every stroke you make can be interpreted and enhanced by AI. Whether you are brainstorming product designs, creating game assets, or just doodling, Framix accelerates your workflow by handling the rendering heavy lifting.

### Key Features
- **✨ Smart Sketching**: Draw roughly, and watch our AI engine refine your lines and generate detailed variations instantly.
- **♾️ Infinite Canvas**: Never run out of space. Our workspace expands as you create, allowing for limitless ideation.
- **⚡ Real-time Collaboration**: (Coming Soon) Work with your team on the same canvas with live updates.
- **🎨 Modern Dark UI**: A sleek, distraction-free interface designed to keep you in the flow state.
- **🔐 Secure Authentication**: Seamless and secure sign-in via Google OAuth.

---

## 💡 Why We Built It

The creative process is often hindered by the "execution gap"—the time and skill required to take an idea from a napkin sketch to a presentable concept. We built Framix to eliminate this friction. We believe that **iteration speed is the key to innovation**. By allowing users to visualize high-fidelity results instantly, we empower them to explore more ideas, take more risks, and ultimately create better work.

---

## 🛠️ Technology Stack

We carefully selected a modern, robust, and scalable tech stack to deliver the best possible user experience.

### 1. **Next.js 15 (App Router)**
- **Why**: Next.js is the premier framework for production-grade React applications.
- **Reasoning**: We chose the App Router for its superior performance with React Server Components (RSC). It allows us to render static parts of the page (like the landing page marketing content) on the server for fast load times and SEO, while keeping the canvas interactive on the client.
- **Vs Alternatives**: Compared to *Create React App* or *Vite*, Next.js provides better routing, image optimization, and backend-for-frontend capabilities out of the box.

### 2. **Convex (Backend-as-a-Service)**
- **Why**: The most developer-friendly backend for reactive apps.
- **Reasoning**: Convex provides a real-time database, file storage, and server functions in one package. Its "subscribe" model means our UI updates instantly when data changes—perfect for a collaborative canvas app.
- **Vs Alternatives**: Unlike *Firebase* or *Supabase*, Convex offers end-to-end type safety. We share TypeScript schemas between backend and frontend, eliminating an entire class of bugs.

### 3. **Tailwind CSS & Shadcn UI**
- **Why**: Speed and consistency.
- **Reasoning**: Tailwind allows us to style rapidly without leaving our HTML. Shadcn UI gives us a library of accessible, high-quality components (like our Carousels and Accordions) that we can copy-paste and fully customize.
- **Vs Alternatives**: Unlike *Material UI* or *Bootstrap*, which can feel "heavy" and hard to override, Shadcn gives us complete ownership of the component code.

### 4. **Google Generative AI (Gemini)**
- **Why**: Cutting-edge multimodal capabilities.
- **Reasoning**: We leverage Google's Gemini models for interpreting user sketches and prompts. It offers an excellent balance of generation quality, speed, and cost-effectiveness.

### 5. **Redux Toolkit**
- **Why**: Predictable state management.
- **Reasoning**: A canvas application involves complex state (tool selection, zoom levels, layer management). Redux Toolkit helps us manage this global state efficiently and predictably.
- **Vs Alternatives**: While *React Context* is great for simple data, Redux is better optimized for high-frequency updates to avoid unnecessary re-renders in a complex graphics application.

### 6. **Inngest**
- **Why**: Reliable background job processing.
- **Reasoning**: AI generation can take time. Inngest allows us to offload these heavy tasks to background queues, ensuring the UI remains responsive. It handles retries and failures gracefully.

### 7. **Polar**
- **Why**: Modern monetization for developers.
- **Reasoning**: Handles our subscription models and payments, allowing us to focus on building features rather than billing infrastructure.

---

