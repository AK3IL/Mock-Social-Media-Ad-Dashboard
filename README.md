# Social Media Dashboard
A visually stunning, information-dense dashboard for monitoring paid and organic social media ad performance across multiple platforms. This analytics tool provides an at-a-glance overview of key metrics, with deeper insights available through interactive elements, all presented in a sleek, modern dark theme.
## Key Features
-   **At-a-Glance KPIs**: High-level summary cards for total spend, impressions, and likes, each with trend indicators and sparkline charts.
-   **Platform Breakdowns**: Dedicated cards for Facebook, Twitter, LinkedIn, and Instagram offer detailed metrics.
-   **Interactive Charts**: Each platform card includes an interactive bar chart that dynamically updates to visualize the historical performance of a user-selected metric.
-   **Modern Dark Theme**: A sophisticated and professional dark UI, optimized for data visualization and reduced eye strain.
-   **Responsive Design**: Flawless performance and layout across all device sizes, from mobile to desktop.
-   **Built with shadcn/ui**: Leverages the power and aesthetics of shadcn/ui for a polished and consistent component library.
## Technology Stack
-   **Frontend**: React, Vite, Tailwind CSS
-   **UI Components**: shadcn/ui, Radix UI
-   **Data Visualization**: Recharts
-   **State Management**: Zustand
-   **Icons**: Lucide React
-   **Animation**: Framer Motion
-   **Backend**: Hono for Serverless Functions
## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
-   [Bun](https://bun.sh/) (v1.0 or higher)
-   [Git](https://git-scm.com/)
### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd social-media-dashboard
    ```
2.  **Install dependencies:**
    The project uses Bun as the package manager.
    ```bash
    bun install
    ```
### Running the Development Server
To start the local development server, run the following command:
```bash
bun run dev
```
The application will be available at `http://localhost:3000`.
## Project Structure
-   `src/`: Contains the frontend React application.
    -   `pages/`: Main page components.
    -   `components/`: Reusable UI components, including shadcn/ui components.
    -   `lib/`: Utility functions and libraries.
    -   `hooks/`: Custom React hooks.
-   `worker/`: Contains the backend serverless function code.
    -   `index.ts`: The entry point for the worker.
    -   `userRoutes.ts`: The place to define custom API routes.
## Development
### Frontend
The frontend is a standard Vite + React application. All components and pages are located in the `src` directory. Styling is handled via Tailwind CSS and shadcn/ui.
### Backend
The backend API is powered by a serverless function using the Hono framework. To add or modify API endpoints, edit the `worker/userRoutes.ts` file.
### Available Scripts
-   `bun run dev`: Starts the Vite development server.
-   `bun run build`: Builds the application for production.
-   `bun run lint`: Lints the codebase using ESLint.
-   `bun run deploy`: Deploys the application.
## Deployment
This project is configured for seamless deployment to a serverless platform.
To deploy your application, simply run the deploy script:
```bash
bun run deploy
```
This command will build the application and deploy it using the pre-configured deployment tool.
## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
## License
This project is licensed under the MIT License. See the `LICENSE` file for details.