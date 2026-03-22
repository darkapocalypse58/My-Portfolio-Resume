# Portfolio Application

## Overview

This is a personal portfolio website for a Senior Frontend Engineer, built as a full-stack TypeScript application. The project showcases accessible, pixel-perfect digital experiences using a modern React frontend with an Express backend. It follows a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and interactions
- **Theme Support**: Dark/light mode with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express
- **Build Tool**: esbuild for server bundling, Vite for client
- **Development**: tsx for TypeScript execution with hot reload via Vite middleware
- **Static Serving**: Express serves built client assets in production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage` class) for development
- **Schema Validation**: Zod integration via drizzle-zod for type-safe validation

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui)
│   │   ├── pages/       # Route pages
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema definitions
└── migrations/       # Drizzle database migrations
```

### Build System
- **Development**: Vite dev server proxied through Express for unified development experience
- **Production Build**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI/Component Libraries
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, and runtime error overlay for Replit environment
- **Drizzle Kit**: Database migration and schema push tooling

### Fonts
- **Google Fonts**: Work Sans (serif) and Inter (sans-serif) loaded via CDN

### Form Handling
- **React Hook Form**: Form state management with `@hookform/resolvers` for Zod validation