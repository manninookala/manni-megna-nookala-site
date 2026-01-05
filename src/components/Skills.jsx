import { motion } from 'framer-motion'
import { 
  Code, Server, Database, Zap, Globe, Palette, Cpu, FileText, 
  Link, Brain, Container, GitBranch, BarChart3, Calculator, 
  PieChart, MessageSquare, Users, Play, Leaf, ChevronDown 
} from 'lucide-react'
import { useState } from 'react'

// These use the local SVG paths from your downloaded files
// Move your files to /public/skills/ for these paths to work
const scrollingSkills = [
  { name: "React", icon: "/assets/skills/react-svgrepo-com.svg" },
  { name: "Node.js", icon: "/assets/skills/node-svgrepo-com.svg" },
  { name: "npm", icon: "/assets/skills/npm-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/assets/skills/mongodb-svgrepo-com.svg" },
  { name: "Express", icon: "/assets/skills/express-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/assets/skills/tailwind-svgrepo-com.svg" },
  { name: "Python", icon: "/assets/skills/python-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/assets/skills/javascript-svgrepo-com.svg" },
  { name: "Angular", icon: "/assets/skills/angular-icon-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/assets/skills/postgresql-logo-svgrepo-com.svg" },
  { name: "HTML5", icon: "/assets/skills/html-5-svgrepo-com.svg" },
  { name: "CSS3", icon: "/assets/skills/css-3-svgrepo-com.svg" },
  { name: "GitHub", icon: "/assets/skills/github-142-svgrepo-com.svg" },
  { name: "Git", icon: "/assets/skills/git-svgrepo-com.svg" },
  { name: "Postman", icon: "/assets/skills/postman-icon-svgrepo-com.svg" },
  { name: "VS Code", icon: "/assets/skills/vscode3-svgrepo-com.svg" },
  { name: "Numpy", icon: "/assets/skills/numpy-svgrepo-com.svg" },
  { name: "Pandas", icon: "/assets/skills/pandas-svgrepo-com.svg" },
  { name: "Cucumber", icon: "/assets/skills/cucumber-svgrepo-com.svg" },
  { name: "Playwright", icon: "/assets/skills/theatre-drama-svgrepo-com.svg" }
];

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: FileText },
      { name: "Node", icon: Server },
      { name: "JavaScript", icon: Code },
      { name: "HTML/CSS", icon: Code },
    ]
  },
  {
    title: "Frameorks & Libraries",
    items: [
      { name: "Express.js", icon: FileText },
      { name: "React", icon: Server },
      { name: "Angular", icon: Code },
      { name: "Redux", icon: Code },
    ]
  },
  {
    title: "Developer Tools",
    items: [
      { name: "VS Code", icon: FileText },
      { name: "Postman", icon: Server },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Link },
    ]
  },
  {
    title: "Skills",
    items: [
      { name: "Machine Learning", icon: FileText },
      { name: "Deep Learning", icon: Server },
      { name: "Natural Language Processing", icon: Code },
      { name: "RESTful API", icon: Code },
      { name: "Prompt Engineering", icon: Calculator },
    ]
  },
  {
    title: "AI Tools",
    items: [
      { name: "Pandas", icon: Brain },
      { name: "NLP", icon: MessageSquare },
      { name: "Tensorflow", icon: Cpu },
      { name: "Scikit Learn", icon: BarChart3 },
    ]
  },
  {
    title: "Miscellaneous",
    items: [
      { name: "Playwright", icon: Play },
      { name: "Cucumber", icon: Leaf },
      { name: "Agile Studio", icon: Users },
    ]
  }
];

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="skills"
      className="w-full py-12 bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900 dark:from-[#031427] dark:via-[#0b0b2a] dark:to-[#2b0b3b] dark:text-slate-100 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-bold tracking-tight mb-2 uppercase bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <span className="block w-36 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mb-8"></span>
        
        {/* Infinite Scrolling Ticker */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex gap-4 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Duplicate list to create seamless loop */}
            {[...scrollingSkills, ...scrollingSkills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-sm flex items-center justify-center w-28 h-14"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="h-8 w-8 object-contain"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/32?text=?" }} 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Expandable Detailed View */}
        <div className="text-center">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Comprehensive Skills Breakdown</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          {/* Compact container with tighter vertical spacing */}
          <div className="mt-6 flex flex-col gap-3">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start md:items-center p-3 bg-white/40 dark:bg-slate-800/10 border border-slate-200/40 dark:border-slate-700/40 rounded-xl backdrop-blur-sm"
              >
                {/* Compact Title Section - Reduced width (md:w-56) */}
                <div className="w-full md:w-56 mb-2 md:mb-0">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>
                
                {/* Compact Tags Section - Reduced padding and gaps */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => {
                    const IconComponent = item.icon; 
                    return (
                      <motion.div 
                        key={idx} 
                        // Entrance animation: fades in and slides up slightly
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        // Hover effect: scales up, lifts, and brightens the border
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          borderColor: "rgba(6, 182, 212, 0.5)", // Cyan glow
                          backgroundColor: "rgba(255, 255, 255, 0.9)" 
                        }}
                        className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-100/50 dark:border-slate-800/50 shadow-sm cursor-default"
                      >
                        <IconComponent className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-sm text-slate-900 dark:text-slate-300">
                          {item.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}