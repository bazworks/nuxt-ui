# Nuxt UI Starter Template

A feature-rich starter template for Nuxt 3 applications with Nuxt UI, TailwindCSS, and various additional setup features.

## 🚀 Features

### Core Technologies

- Nuxt 3
- Nuxt UI
- TailwindCSS
- TypeScript
- Pinia (State Management)
- Vue 3

### Installed Modules

- `@nuxt/eslint` - ESLint integration
- `@nuxt/image` - Image optimization
- `@nuxt/ui` - UI components
- `@nuxt/fonts` - Font optimization
- `@nuxt/icon` - Icon support
- `@pinia/nuxt` - Pinia integration
- `pinia-plugin-persistedstate` - State persistence
- `@tanstack/vue-table` - Table functionality
- `vee-validate` with `zod` - Form validation

## 📁 Project Structure

```
├── app/
│   ├── assets/         # Static assets
│   ├── components/     # Vue components
│   ├── composables/    # Vue composables
│   ├── layouts/        # Page layouts
│   ├── middleware/     # Route middleware
│   ├── pages/          # Application pages
│   ├── plugins/        # Vue plugins
│   ├── stores/         # Pinia stores
│   └── types/          # TypeScript types
├── server/
│   └── api/           # Server API routes
└── public/            # Public static files
```

## 🔧 Available Components

### Core Components

- `CoreSidebar` - Sidebar navigation component
- `CoreFieldSelectMenu` - Enhanced select menu component
- `CoreFileUploader` - File upload component
- `CoreSmartTable` - Advanced table component
- `CoreConfirmDialog` - Confirmation dialog component

### Filter Components

Located in `app/components/Filter/` - Reusable filter components

## 🎣 Composables

### API Related

- `useApi` - Base API composable
- `useApiFetch` - Enhanced fetch composable with error handling and loading states
- `useAuth` - Authentication composable

## 🔐 Middleware

Authentication and route protection middleware available in `app/middleware/`

## 📡 Server API

Example API routes and handlers in `server/api/`

## 🎨 UI Features

- Light/Dark mode support
- Responsive design
- Modern UI components from Nuxt UI
- Customizable theme

## 🛠️ Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure your environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Environment Variables

Required environment variables:

- `API_BASE_URL` - Base URL for API requests (defaults to "/api")

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🔧 Configuration

The template uses Nuxt 3's configuration system. Key configurations can be found in:

- `nuxt.config.ts` - Main Nuxt configuration
- `app.config.ts` - Application configuration

## 📚 Additional Features

- TypeScript support
- ESLint configuration
- Editor configuration
- VS Code settings
- Persistent state management with Pinia
- Form validation with VeeValidate and Zod
- Table management with TanStack Table
- File upload capabilities
- Smart table implementation
- Confirmation dialogs
- Field selection menus

## 🎯 Best Practices

- Follows Vue 3 Composition API patterns
- Implements TypeScript for type safety
- Uses Pinia for state management
- Implements proper error handling
- Follows DRY principles
- Modular component structure
- Reusable composables
- Type-safe API calls

## 📦 Dependencies

All dependencies are listed in `package.json`. Key dependencies include:

- Nuxt 3
- Vue 3
- Nuxt UI
- Pinia
- TypeScript
- VeeValidate
- Zod
- TanStack Table

## 🔐 Security

- Environment variable management
- API route protection
- Authentication middleware
- Secure file upload handling

## 🎨 Styling

- TailwindCSS for utility-first styling
- Nuxt UI components
- Custom CSS in `assets/css/main.css`
- Responsive design patterns

## 📱 Responsive Design

The template is built with mobile-first approach and includes responsive components and layouts.

## 🔄 State Management

- Pinia for state management
- Persistent state with `pinia-plugin-persistedstate`
- Type-safe stores

## 📝 Form Handling

- VeeValidate for form validation
- Zod for schema validation
- Custom form components
- File upload handling

## 📊 Data Tables

- TanStack Table integration
- Smart table component with sorting, filtering, and pagination
- Customizable table layouts

## 🔐 Authentication

- Authentication composable
- Protected routes
- Authentication middleware
- Session management

## 📦 File Structure

The template follows a modular structure with clear separation of concerns:

- Components for UI elements
- Composables for reusable logic
- Stores for state management
- Pages for routes
- Middleware for route protection
- API routes for backend communication

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Start development server
5. Begin building your application

## 📚 Documentation

For more information about the technologies used:

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Pinia Documentation](https://pinia.vuejs.org)
- [TailwindCSS Documentation](https://tailwindcss.com)
