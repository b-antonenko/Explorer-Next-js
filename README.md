# Explorer - Next.js Social Media App

A modern social media application built with Next.js featuring post creation, image uploads, and user interactions.

## 🚀 Features

- **Post Creation**: Create posts with titles, content, and images
- **Image Uploads**: Seamless image uploading with Cloudinary integration
- **Like System**: Like and unlike posts with real-time updates
- **Responsive Design**: Modern UI that works across all devices
- **SQLite Database**: Lightweight database with Better SQLite3
- **Server Actions**: Modern Next.js server-side functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.0
- **Frontend**: React 18
- **Database**: SQLite with Better SQLite3
- **Image Storage**: Cloudinary
- **Styling**: CSS Modules
- **Language**: JavaScript

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/b-antonenko/Explorer-Next-js.git
   cd explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Cloudinary credentials:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

### Creating a Post

1. Navigate to `/new-post`
2. Fill in the post title and content
3. Upload an image
4. Submit the form to create your post

### Viewing Posts

- The home page displays the latest posts
- Visit `/feed` to see all posts
- Like posts by clicking the heart icon

## 📁 Project Structure

```
explorer/
├── actions/           # Server actions for posts
├── app/              # Next.js app directory
│   ├── feed/         # Feed page with all posts
│   ├── new-post/     # Post creation page
│   └── layout.js     # Root layout
├── components/       # Reusable React components
├── lib/             # Utility functions and database
├── assets/          # Static assets
└── public/          # Public files
```

## 🗄️ Database Schema

The application uses SQLite with the following tables:

- **users**: User information (id, first_name, last_name, email)
- **posts**: Post data (id, image_url, title, content, created_at, user_id)
- **likes**: Post likes (user_id, post_id)

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Cloudinary Setup

1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Get your Cloud Name, API Key, and API Secret from the dashboard
3. Add these to your `.env.local` file

### Database

The SQLite database (`posts.db`) is automatically created when you first run the application. No additional setup required.

Built with ❤️ using Next.js
