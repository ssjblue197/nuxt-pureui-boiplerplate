# Nuxt 3 Boilerplate with PureUI, TypeScript, and Pinia

This boilerplate is designed to help you kickstart your project using Nuxt 3 combined with PureUI, a UI kit built by you, along with TypeScript and Pinia for state management.

## Features

- **Nuxt 3**: Enjoy the powerful features of the latest version of Nuxt, including SSR, static site generation, and more.
- **PureUI**: Utilize your custom-built UI kit, PureUI, to create a consistent and beautiful user interface.
- **TypeScript**: Benefit from static typing and modern JavaScript features with TypeScript.
- **Pinia**: Manage your application's state with Pinia, a modern and lightweight state management library.

## Directory Structure

```plaintext
├── assets
│   └── css
│       ├── index.scss
│       └── themes
├── components
├── layouts
├── pages
├── plugins
│   ├── pureui.ts
│   └── error.ts
├── store
│   └── store.ts
├── app.vue
├── nuxt.config.ts
├── package.json
└── README.md
```

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Configuration

- **Nuxt Configuration**: Modify `nuxt.config.ts` to customize your app's settings, including environment variables, plugins, and modules.
- **Tailwind CSS**: Tailwind CSS is included and configured with custom themes and utilities.

## Usage

- **Components**: Develop and organize your Vue components within the `components` directory.
- **Layouts**: Define your app's layout structure in the `layouts` directory.
- **Pages**: Create your application pages within the `pages` directory, leveraging Nuxt's file-based routing.
- **Plugins**: Add custom plugins in the `plugins` directory to extend the functionality of your app.
- **Store**: Manage your app's state using Pinia, with stores defined in the `store` directory.

## Deployment

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start the production server:**

   ```bash
   npm start
   ```

3. The application will be served at `http://localhost:1234`.

## Contributing

Contributions are welcome! Please fork the repository and make a pull request with your changes.

## License

This project is licensed under the MIT License.
