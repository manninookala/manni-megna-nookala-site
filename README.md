# Manni Megna Nookala - Portfolio

<video width="800" height="400" controls>
  <source src="./src/images/f997d19bd9b3440ca39a7c8a2b5b982d.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.

## 🚀 Live Demo

[View Live Portfolio](https://manni-megna-nookala.vercel.app/) 

## ✨ Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful & consistent icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
manni-megna-nookala-site/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form and info
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Hero.jsx        # Landing section with intro
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Projects.jsx    # Portfolio projects showcase
│   │   └── Skills.jsx      # Technical skills display
│   ├── data/               # Static data files
│   │   ├── experience.js   # Work experience data
│   │   ├── projects.js     # Project portfolio data
│   │   └── skills.js       # Skills and technologies data
│   ├── images/             # Static assets
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles
│   └── App.css             # Component-specific styles
├── public/                 # Public assets
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/manni-megna-nookala-site.git
   cd manni-megna-nookala-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Adding Your Information

1. **Personal Details**: Update the Hero component (`src/components/Hero.jsx`) with your name, bio, and photo
2. **Skills**: Edit `src/data/skills.js` to include your technical skills
3. **Projects**: Add your projects to `src/data/projects.js`
4. **Experience**: Update `src/data/experience.js` with your work history
5. **Contact**: Modify the Contact component with your contact information

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles in respective component files

## 📱 Sections Overview

### 🏠 Hero
- Eye-catching introduction with animated elements
- Call-to-action buttons for projects and resume download
- Professional photo display

### 👤 About
- Personal background and career summary
- Key achievements and interests

### 🛠️ Skills
- Technical skills organized by category
- Interactive skill badges with hover effects

### 💼 Projects
- Showcase of key projects with descriptions
- Links to live demos and source code
- Technology stack for each project

### 💼 Experience
- Professional work history timeline
- Company details, roles, and accomplishments

### 📞 Contact
- Contact form for inquiries
- Social media links
- Direct contact information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push


### Other Platforms
The built files in `dist/` can be deployed to any static hosting service like:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean Spaces

## 🤝 Contributing

While this is a personal portfolio, feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request


⭐ **Star this repo** if you found it helpful!
