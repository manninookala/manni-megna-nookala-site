import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 bg-gradient-to-br from-purple-50 via-teal-50 to-orange-50 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-violet-900 dark:text-slate-50"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Left: intro + actions */}
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-300 dark:bg-violet-500/10 dark:text-violet-200 dark:ring-violet-500/40">
            <Sparkles className="h-3 w-3" />
            Open to Full‑Stack &amp; Backend Roles
          </span>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {/* Hi, I&apos;m{' '} */}
            <span className="bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent">
              Manni Megna Nookala
            </span>
          </h1>

          <div className="flex flex-wrap gap-3 text-xs">
            <span className="cursor-default rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 font-medium text-slate-700 shadow-sm transition-all duration-300 ease-out
                            hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md
                            dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200
                            dark:hover:border-slate-500 dark:hover:bg-slate-800">
              JavaScript · TypeScript · React
            </span>

            <span className="cursor-default rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 font-medium text-slate-700 shadow-sm transition-all duration-300 ease-out
                            hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md
                            dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200
                            dark:hover:border-slate-500 dark:hover:bg-slate-800">
              Node.js · Express · REST APIs
            </span>

            <span className="cursor-default rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 font-medium text-slate-700 shadow-sm transition-all duration-300 ease-out
                            hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md
                            dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200
                            dark:hover:border-slate-500 dark:hover:bg-slate-800">
              Python · NLP · ML
            </span>
          </div>

          <p className="text-base text-slate-700 sm:text-lg dark:text-slate-200">
            Full‑Stack Developer specializing in building secure backend systems, RESTful APIs, and
            data‑driven features with modern JavaScript, React, Node.js, and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-400/40 transition hover:bg-violet-500 dark:bg-violet-500 dark:shadow-violet-500/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="/Manni_Megna_Nookala_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-800 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 transition dark:border-slate-500/60 dark:text-slate-100 dark:hover:text-violet-200 dark:hover:bg-slate-900/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right: portrait image only */}
        <motion.div
          className="relative w-full max-w-md"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-violet-300/40 via-sky-300/30 to-emerald-300/20 blur-3xl dark:from-violet-500/40 dark:via-sky-400/20 dark:to-emerald-400/10" />

          {/* Portrait */}
          <div className="relative h-80 w-80 mx-auto">
            <div className="overflow-hidden rounded-full border-[3px] border-violet-300/80 shadow-[0_0_60px_rgba(139,92,246,0.35)] h-full w-full dark:shadow-[0_0_60px_rgba(139,92,246,0.6)]">
              <img
                src="src\images\1759123387755.jfif"
                alt="Developer portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          className="flex items-center gap-2 text-xs text-slate-300/80"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <span className="h-9 w-5 rounded-full border border-slate-500/70 p-1">
            <span className="block h-full w-full rounded-full bg-slate-300" />
          </span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}