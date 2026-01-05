import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-8 bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900 dark:from-[#031427] dark:via-[#0b0b2a] dark:to-[#2b0b3b] dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 uppercase bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Contact</h2>
        <span className="block w-36 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4"></span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Based in Hyderabad, Telangana. Feel free to reach out for roles in full-stack development, backend engineering, or data-driven projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <MapPin className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Location</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">Hyderabad, Telangana</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <Mail className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">megnanookala@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                  <Phone className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Phone</div>
                  <div className="textsm text-slate-700 dark:text-slate-300">+91-7731-093-523</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <motion.a
                href="https://linkedin.com/in/manninookala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a
                href="https://github.com/manninookala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Twitter className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              </motion.a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-900 dark:text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-white/80 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-900 dark:text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-white/80 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-900 dark:text-white mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 bg-white/80 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition resize-none text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition text-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


