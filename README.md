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
-   **Backend**: Python Flask API (Vercel serverless functions)
## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
-   [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/)
-   [Python](https://www.python.org/) (v3.9 or higher)
-   [Git](https://git-scm.com/)
### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd social-media-dashboard
    ```
2.  **Install frontend dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Bun:
    ```bash
    bun install
    ```
3.  **Install Python dependencies (for local development):**
    ```bash
    pip install -r requirements.txt
    ```
### Running the Development Server
**Option 1: Run both frontend and backend separately**
1.  Start the Python API server:
    ```bash
    python api/index.py
    ```
    The API will be available at `http://localhost:5000`.
2.  In a separate terminal, start the frontend:
    ```bash
    npm run dev
    # or
    bun run dev
    ```
    The application will be available at `http://localhost:3000`.
**Option 2: Use Vercel CLI for local development** (Recommended)
```bash
npm install -g vercel
vercel dev
```
This will run both the frontend and API together, simulating the production environment.
## Project Structure
-   `src/`: Contains the frontend React application.
    -   `pages/`: Main page components.
    -   `components/`: Reusable UI components, including shadcn/ui components.
    -   `lib/`: Utility functions and libraries.
    -   `hooks/`: Custom React hooks.
-   `api/`: Contains the Python Flask backend.
    -   `index.py`: The main Flask application with API endpoints.
-   `vercel.json`: Vercel deployment configuration for Python + React.
-   `requirements.txt`: Python dependencies.
## Development
### Frontend
The frontend is a standard Vite + React application. All components and pages are located in the `src` directory. Styling is handled via Tailwind CSS and shadcn/ui.
### Backend
The backend API is a Python Flask application deployed as Vercel serverless functions. The API provides two main endpoints:
-   `/api/paid-performance`: Returns KPI and platform performance data for paid social media
-   `/api/organic-performance`: Returns KPI and platform performance data for organic social media
-   `/api/health`: Health check endpoint
To modify the API, edit the `api/index.py` file.
### Available Scripts
-   `npm run dev` or `bun run dev`: Starts the Vite development server.
-   `npm run build` or `bun run build`: Builds the frontend for production.
-   `npm run lint` or `bun run lint`: Lints the codebase using ESLint.
-   `vercel dev`: Runs both frontend and backend locally (requires Vercel CLI).
-   `vercel --prod`: Deploys to Vercel production.
## Deployment to Vercel
This project is configured for seamless deployment to Vercel with a Python Flask backend and React frontend.
### Prerequisites
-   A [Vercel account](https://vercel.com/signup)
-   [Vercel CLI](https://vercel.com/docs/cli) installed (optional but recommended)
### Deploy with Vercel CLI (Recommended)
1.  **Install Vercel CLI** (if not already installed):
    ```bash
    npm install -g vercel
    ```
2.  **Login to Vercel:**
    ```bash
    vercel login
    ```
3.  **Deploy the project:**
    ```bash
    vercel
    ```
    Follow the prompts to configure your deployment. On the first deployment, Vercel will ask you to confirm project settings.
4.  **Deploy to production:**
    ```bash
    vercel --prod
    ```
### Deploy via Vercel Dashboard
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2.  Go to [Vercel Dashboard](https://vercel.com/dashboard)
3.  Click "New Project"
4.  Import your repository
5.  Vercel will automatically detect the configuration from `vercel.json`
6.  Click "Deploy"
### Environment Configuration
The project uses `vercel.json` which configures:
-   Python Flask API at `/api/*` routes
-   Static React frontend at all other routes
-   Automatic builds for both frontend and backend
No additional environment variables are required for basic deployment.
## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
## License
This project is licensed under the MIT License. See the `LICENSE` file for details.