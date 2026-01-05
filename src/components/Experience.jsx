import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const experiences = [
  {
    title: "Associate Applications Engineer Intern",
    company: "Pega Systems",
    date: "Apr 2025 – Oct 2025",
    location: "Hyderabad, India",
    techStack: "Node, Express.js, React, Redux, MongoDB, Redis, Presto, Jest",
    description: [
      "Implemented Search & Sort functionality for Monitored Screens tab with efficient data filtering to improve data accessibility and user workflows.",
      "Created the sort functionality across the Screen Admin pages, enhancing overall data consistency.",
      "Enhanced the Task tag warning issues in Process Mining Modules and handled the similar issues across multiple admin interfaces.",
      "Developed comprehensive Jest unit-tests for Task Tags APIs, ensuring reliable request/response handling and consistent API behavior.",
      "Utilized Git extensively for branch management, code reviews.",
      "Delivered feature demos to stakeholders and team members, clearly explaining functionality, workflows, and implemented improvements.",
      "Involved in end-to-end Regression with QA for releases.",
      "Validated the KPIs, connectors and access control workflows.",
      "Tracked sprint progress and monitored issues using Agile Studio, ensuring timely updates for smooth workflow management.",
      "Collaborated actively in Agile ceremonies—including sprint planning, daily stand-ups, and retrospectives."
    ]
  },
  {
    title: "Research Intern",
    company: "Allied Analytics",
    date: "Apr 2024 – Mar 2025",
    location: "",
    techStack: "Python, Pandas, Numpy, NLTK, Matplotlib, Beautiful Soup, Google Collab",
    description: [
      "Pre-processed the large CSV datasets using Python libraries such as Pandas & Numpy ensuring data integrity.",
      "Performed Exploratory data analysis to identify patterns and detect anomalies.",
      "Designed and developed data pipelines that involve standardizing formats and converting categorical variables into analyzable formats for further research analysis.",
      "Implemented web scraping solutions to extract structured data from online sources.",
      "Documented the data workflows and pre-processing pipelines for seamless collaboration within the research team."
    ]
  }
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-8 bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900 dark:from-[#031427] dark:via-[#0b0b2a] dark:to-[#2b0b3b] dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 uppercase bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Experience</h2>
        <span className="block w-36 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4"></span>
        <div className="relative">
          {/* Timeline Line */}
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={index}
                // REMOVED: items-center (which was shrinking the card)
                // ADDED: w-full to ensure the container spans the whole row
                className="relative w-full mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* CHANGE: Removed 'max-w-lg' and 'ml-4/mr-4' 
                  ADDED: 'max-w-4xl' (or your desired width) and 'mx-auto' to center the whole card 
                */}
                <div className="w-full max-w-6xl mx-auto px-4">
                  <div className="bg-white/80 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.1)] transition-shadow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-600 dark:text-cyan-300 text-sm font-medium mb-1">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      {exp.date} {exp.location && `· ${exp.location}`}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="leading-relaxed">• {desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}


