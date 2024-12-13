# WA Dev Profile

A modern, interactive developer profile page built with Astro and TypeScript. Features a sleek design with real-time status indicators, achievement tracking, and contribution history.

## 🚀 Features

- 💫 Modern, responsive design
- 🎯 Achievement system with progress tracking
- 📊 Interactive contribution graph
- 🟢 Real-time status indicators
- 👤 Customizable user profiles
- 🎨 Beautiful UI with hover effects

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://reactjs.org) - UI Components

## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wa-dev-profile.git
cd wa-dev-profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Configuration

Edit `src/config/profile.ts` to customize your profile:

```typescript
export const profileConfig = {
  user: {
    name: 'Your Name',
    username: 'your-username',
    bio: 'Your bio here',
    // ... more options
  },
  // ... other configurations
}
```

## 🎨 Customization

- **Status Types**: Online, Idle, Offline, DoNotDisturb
- **Achievement System**: Easily add new achievements
- **Color Schemes**: Customizable through Tailwind classes

## 📦 Project Structure

```
/
├── src/
│   ├── components/    # UI Components
│   ├── config/       # Profile configuration
│   ├── layouts/      # Page layouts
│   └── pages/        # Route pages
├── public/           # Static assets
└── package.json      # Dependencies
```

## 🤝 Contributing

Feel free to contribute! Open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this for your own profile!
