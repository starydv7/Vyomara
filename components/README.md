# Components Directory

This directory contains reusable UI components for the application.

## Structure

```
components/
├── ui/           # Base UI components (buttons, cards, etc.)
├── layout/       # Layout components (header, footer, etc.)
└── features/     # Feature-specific components
```

## Component Guidelines

- Use modern JavaScript (ES6+) for all components
- Follow React best practices
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Use Tailwind CSS for styling
- Export components as default exports
- Make components reusable and composable

## Example Component

```jsx
export default function MyComponent({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```
