import { GraduationCap, Code, Brain, TerminalIcon } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-8 bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900 dark:from-[#031427] dark:via-[#0b0b2a] dark:to-[#2b0b3b] dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 uppercase bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">About</h2>
        <span className="block w-36 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4"></span>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          {/* Left: Who I Am */}
          <div className="md:col-span-7">
            <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/10 dark:border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-[0_10px_30px_rgba(2,6,23,0.08)] dark:shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 text-base md:text-md" style={{lineHeight: 1.72}}>
                <p>
                  I&apos;m Manni Megna Nookala — a Full‑Stack Developer with hands-on experience building responsive web applications and scalable backend systems. I work across the stack using JavaScript, React, Node.js, and Express, focusing on clean code, maintainable architectures, and smooth user experiences.
                </p>

                <p>
                  My expertise includes designing RESTful APIs, implementing frontend features, debugging complex workflows, and collaborating closely within Agile teams. I also have experience working with Machine Learning and NLP projects, applying Python-based data analysis techniques to real-world problems.
                </p>

                <p>
                  I enjoy solving problems end-to-end—whether that means improving UI workflows, optimizing backend logic, or ensuring reliability through unit testing and regression validation. I value clarity in code, thoughtful design, and continuous learning as a developer.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="md:col-span-5 space-y-4">

            {/* Card 1 - Pega Internship */}
            <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-sm" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <img
                    src="src\images\pega-light.png"
                    alt="PEGA"
                    className="h-11 w-11 object-contain dark:invert"
                  />
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white font-semibold">Interned at PEGA</div>
                <div className="text-cyan-600 dark:text-cyan-300 text-sm font-medium">Associate Application Engineer &mdash; Pega Process Mining Application</div>
                <div className="text-slate-700 dark:text-slate-300 text-sm mt-1">Apr 2025 - Oct 2025 | Certified Pega CSA Architect</div>
              </div>
            </div>

            {/* Card 2 - Education */}
            <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-sm" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <GraduationCap className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white font-semibold">Master’s in Technology – Computer Science</div>
                <div className="text-cyan-600 dark:text-cyan-300 text-sm font-medium">Gandhi Institute of Technology and Management (GITAM University)</div>
                <div className="text-slate-700 dark:text-slate-300 text-sm mt-1">Aug 2023 – Jun 2025 | CGPA: 8.73</div>
              </div>
            </div>

            {/* Card 3 - Skillset */}
            <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-sm" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <TerminalIcon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white font-semibold">MERN Stack Developer</div>
                <div className="text-cyan-600 dark:text-cyan-300 text-sm font-medium">MongoDB, Express, React, Node</div>
                <div className="text-slate-700 dark:text-slate-300 text-sm mt-1">Full-stack developer building responsive, AI-powered fullstack web applications.</div>
              </div>
            </div>

            {/* Card 4 - AI Expertise */}
            <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-sm" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <Brain className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white font-semibold">AI & ML Engineer</div>
                <div className="text-cyan-600 dark:text-cyan-300 text-sm font-medium">Python, NLP, Deep Learning, Prompt Engineering</div>
                <div className="text-slate-700 dark:text-slate-300 text-sm mt-1">Designing end-to-end ML pipelines and NLP solutions with the Python ecosystem and modern AI tools.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


