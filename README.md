# Codefolio Hub - Portfolio Website

![Portfolio Preview](/files/portfolio-preview.png)

## Live Demo

[View Live Demo on Glitch](https://your-glitch-project.glitch.me/) - Update with your Glitch URL

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Interactive Project Showcase**: Modal-based project details with demo functionality
- **Integrated Demo Launchers**: Run project demos directly from the portfolio
- **Contact Form**: Easy way for visitors to get in touch
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## 🛠️ Technologies Used

- **Frontend**:
  - React 18+
  - TypeScript
  - Tailwind CSS
  - Vite (for fast development and optimized builds)
  - Lucide Icons

- **Backend**:
  - Express.js (for handling project demo launches)
  - Node.js

## 📁 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── About/      # About section components
│   │   ├── Contact/    # Contact section components
│   │   ├── Home/       # Home/hero section components
│   │   ├── Layout/     # Layout components (navbar, footer)
│   │   ├── Projects/   # Project showcase components
│   │   └── Skills/     # Skills section components
│   ├── data/           # Data files for projects, skills, etc.
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── server.js           # Express server for handling project demos
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🔧 Project Demo Functionality

This portfolio showcases several interactive projects with demo capabilities:

1. **Caesar Cipher**: A Java-based encryption tool with a Swing GUI interface that demonstrates encryption/decryption using the Caesar cipher method
2. **Ecosystem Simulation**: A Java simulation of an ecosystem with various species that visualizes population dynamics
3. **Code Processor**: A sophisticated code processing tool for analyzing them using appropriate AI environments.

The demo functionality is implemented through an Express backend that executes the appropriate files when the "Launch Demo" button is clicked. When running locally, this allows direct launching of applications from the portfolio interface.

Note: The demo functionality works best when running the portfolio locally with both the frontend and backend servers active.

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/HectorCorbellini/codefolio-hub.git
   cd codefolio-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

4. In a separate terminal, start the frontend development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:5173

## 📦 Building for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory ready for deployment.

## 🌐 Deployment Options

### Render Deployment

This portfolio is optimized for deployment on Render with the following features:

- **Full-Stack Application**: Includes both React frontend and Express backend
- **Demo Functionality**: Special handling for project demos in the Render environment
- **Automatic Deployment**: Continuous deployment from GitHub

#### Setting Up Render Deployment

To deploy this portfolio on Render, follow these steps:

1. **Create a GitHub Repository**:
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Create a Render Account**:
   - Go to [render.com](https://render.com)
   - Sign up or log in

3. **Create a New Web Service**:
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Select the repository with your portfolio code

4. **Configure the Web Service**:
   - Name: Choose a name for your service
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `node server.js`
   - Select the appropriate plan (Free tier works fine)

5. **Advanced Settings** (Optional):
   - Add environment variables if needed
   - Configure auto-deploy settings

6. **Create Web Service**:
   - Click "Create Web Service"
   - Render will build and deploy your application

7. **Access Your Deployed Site**:
   - Once deployment is complete, Render will provide a URL
   - Your portfolio will be accessible at that URL

### Glitch Deployment (Alternative)

This portfolio can also be deployed on Glitch with the following features:

- **Full-Stack Application**: Includes both React frontend and Express backend
- **Demo Functionality**: Special handling for project demos in the Glitch environment
- **Keep-Alive Script**: Prevents the application from sleeping on Glitch's free tier

#### Setting Up Glitch Deployment

To deploy this portfolio on Glitch, follow these steps:

1. **Create a New Glitch Project**:
   - Go to [glitch.com](https://glitch.com)
   - Sign up or log in
   - Click "New Project" and select "Node.js" (Full-Stack)

2. **Import from GitHub**:
   - In your Glitch project, click on "Tools" and select "Import/Export"
   - Choose "Import from GitHub"
   - Enter the GitHub repository URL: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

3. **Update Keep-Alive Script** (Optional):
   - Once deployed, update the URL in `keep-alive.js` with your actual Glitch project URL
   - This helps prevent the app from sleeping after 5 minutes of inactivity

## 📞 Contact

- Email: corbellini.personal@gmail.com
- Phone: +598 91633183
- Location: Montevideo, Uruguay

## 📄 License

This project is open source and available under the MIT License.
