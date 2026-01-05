import { motion } from 'framer-motion'

const projects = [
  {
    image: "src/images/projects/images.jfif",
    title: "SwifterCart API – Streamlining Shopping Experience",
    description: "Built a RESTful API for a shopping cart system, handling cart management, discounts, and secure checkout flows.",
    tech: ["Node.js", "Express", "JavaScript", "RESTful APIs"],
    demoUrl: "https://example.com/swiftercart"
  },
  {
    image: "src/images/projects/feat-customer-reviews-w740h370.webp",
    title: "Amazon Real-Time Sentiment Analysis",
    description: "Developed an NLP pipeline to analyze Amazon product reviews in real time, improving sentiment classification accuracy.",
    tech: ["Python", "NLP", "LSTM", "REST API"],
    demoUrl: "https://example.com/sentiment"
  },
  {
    image: "src/images/projects/360_F_93640214_thJJsHbHkPRn4UUd6ajmqbMoJqt101xk.jpg",
    title: "Project 3",
    description: "A sample project description for demonstration purposes.",
    tech: ["React", "Tailwind", "Framer Motion"],
    demoUrl: "https://example.com/project3"
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-8 bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900 dark:from-[#031427] dark:via-[#0b0b2a] dark:to-[#2b0b3b] dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 uppercase bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Projects</h2>
        <span className="block w-36 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/80 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)] cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(6, 182, 212, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


