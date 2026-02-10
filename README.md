# Global Vision

A comprehensive, modern web application built with React, Mantine UI, React Query, and Tailwind CSS.  Global Vision provides a scalable foundation for building enterprise-level applications with advanced authentication, routing, and modern development tools.

## 🚀 Features

- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Mantine UI** - Modern React components library
- **React Query** - Powerful data synchronization for React
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **Axios** - HTTP client for API calls
- **ESLint** - Code linting and formatting
- **TypeScript Ready** - Easy to migrate to TypeScript


## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard-specific components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components (navbar, sidebar, etc.)
│   ├── modalContents/  # Modal content components
│   └── tables/         # Table components
├── configs/            # Configuration files
│   ├── axios.config.js # Axios configuration
│   ├── query.config.jsx # React Query configuration
│   └── theme.config.js # Mantine theme configuration
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── layouts/            # Page layouts
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   ├── auth/           # Authentication pages
│   └── user/           # User pages
├── routers/            # Routing configuration
└── services/           # API services and utilities
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run clean` - Clean node_modules and reinstall

## 🎨 Customization

### Theme Configuration

The Mantine theme can be customized in `src/configs/theme.config.js`:

```javascript
export const theme = createTheme({
  primaryColor: "blue", // Change primary color
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  colors: {
    // Custom color palette
  },
});
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/routers/Router.jsx`
3. Update navigation in layout components if needed

### API Configuration

Configure your API base URL in `src/configs/axios.config.js`:

```javascript
const api = axios.create({
  baseURL: "https://your-api-url.com/api",
});
```

## 🔧 Configuration Files

- **Vite**: `vite.config.js` - Build configuration
- **Tailwind**: `tailwind.config.js` - Tailwind CSS configuration
- **ESLint**: `eslint.config.js` - Code linting rules
- **PostCSS**: Configured for Mantine and Tailwind compatibility

## 📦 Key Dependencies

### Core
- `react` & `react-dom` - React framework
- `vite` - Build tool
- `react-router-dom` - Routing

### UI & Styling
- `@mantine/core` - UI component library
- `@mantine/dates` - Date picker components
- `@mantine/hooks` - Useful React hooks
- `@mantine/modals` - Modal management
- `@mantine/notifications` - Notification system
- `tailwindcss` - CSS framework
- `@tabler/icons-react` - Icon library

### Data Management
- `@tanstack/react-query` - Data fetching and caching
- `axios` - HTTP client

### Utilities
- `clsx` - Conditional className utility
- `dayjs` - Date manipulation
- `sweetalert2` - Beautiful alerts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The `dist` folder contains the production build ready for deployment.

## 📝 License

This project is part of the Global Vision initiative and is available for development and customization.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with the Global Vision project, please contact the development team.

---

**Happy Coding! 🎉**