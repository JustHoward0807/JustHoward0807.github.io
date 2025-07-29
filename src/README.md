# Portfolio Project Structure

This project follows a **Feature-Based Architecture** for better organization and maintainability.

## 📁 Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (buttons, cards, etc.)
│   └── layout/          # Layout components
├── features/            # Feature-based organization
│   ├── home/            # Home page feature
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   └── index.ts     # Export file
│   ├── projects/        # Projects feature
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   └── index.ts
│   ├── works/           # Work experience feature
│   │   ├── Works.tsx
│   │   ├── Works.css
│   │   └── index.ts
│   └── contact/         # Contact feature
│       ├── Contact.tsx
│       ├── Contact.css
│       └── index.ts
├── models/              # Data models
│   ├── Project.tsx
│   ├── WorkExperience.tsx
│   └── index.ts
├── styles/              # Global styles
│   ├── App.css
│   └── index.css
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── App.tsx             # Main app component
```

## 🎯 Benefits

- **Better Organization**: Related files are grouped together
- **Scalability**: Easy to add new features
- **Maintainability**: Clear separation of concerns
- **Reusability**: Components can be easily shared
- **TypeScript Support**: Better type organization

## 📝 How to Add New Features

1. Create a new directory in `src/features/`
2. Add your component files (`.tsx`, `.css`)
3. Create an `index.ts` file for clean exports
4. Import from the feature directory: `import NewFeature from './features/new-feature'`

## 🔧 Import Examples

```typescript
// Import components
import Home from './features/home';
import Projects from './features/projects';

// Import models
import { projects, workExperiences } from './models';

// Import styles
import './styles/App.css';
``` 