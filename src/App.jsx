import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Workflow, Bot, Zap, MessageSquare, Database, LineChart, BrainCircuit } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <motion.div variants={fadeUp} className="text-sm font-medium tracking-wide text-orange-600 uppercase">
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 variants={fadeUp} className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-gray-600">
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-orange-50/60 via-white to-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
        {/* Spline Background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Warm gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 ring-1 ring-gray-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-700">Indian Automation Studio</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              WorkYaan – Your Automation Vehicle
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700">
              Smart AI and n8n workflows that save you time and boost productivity.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">Get Your Workflow</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ambient gear/flow icons */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 0.8, y: 0 }} transition={{ duration: 1.2 }} className="absolute right-8 top-16 hidden md:block">
            <Workflow className="h-10 w-10 text-orange-400/70" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.8, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} className="absolute left-8 bottom-16 hidden md:block">
            <Cpu className="h-10 w-10 text-gray-400/70" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-orange-100/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeader
              eyebrow="About WorkYaan"
              title="Automation for Indian entrepreneurs and teams"
              subtitle="WorkYaan helps Indian entrepreneurs and businesses automate daily tasks using AI and n8n workflows. From WhatsApp responders to data-sync bots, we build automation that works 24/7 — so you don’t have to."
            />
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { icon: Bot, label: 'Automation' },
                { icon: BrainCircuit, label: 'AI' },
                { icon: Workflow, label: 'Workflow' },
              ].map((item, idx) => (
                <div key={idx} className="group rounded-xl bg-white/70 backdrop-blur p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
                  <item.icon className="h-8 w-8 text-orange-500 group-hover:rotate-6 transition" />
                  <div className="mt-3 font-semibold text-gray-900">{item.label}</div>
                  <p className="mt-1 text-sm text-gray-600">Thoughtfully designed automations that connect your tools and keep work flowing.</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeader
              eyebrow="Explainer"
              title="How AI Automation Works"
              subtitle="Watch how WorkYaan brings your ideas to life with intelligent workflows."
            />
            <motion.div variants={fadeUp} className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-xl">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/JMUxmLyrhSk"
                title="How AI Automation Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeader
              eyebrow="Services"
              title="What We Build"
              subtitle="Simple, dependable automations tailored to your stack."
            />
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { icon: MessageSquare, title: 'WhatsApp Auto-Reply Systems', desc: 'Answer customers instantly with smart, multilingual responders.' },
                { icon: Database, title: 'CRM & Lead Automation', desc: 'Capture, score, and route leads across your tools automatically.' },
                { icon: Workflow, title: 'Business Process Flows', desc: 'Data → Report → Alert. Keep teams informed without manual work.' },
                { icon: Cpu, title: 'AI Chat Integrations', desc: 'Plug in ChatGPT, Gemini, and more to power internal or customer chats.' },
              ].map((s, idx) => (
                <div key={idx} className="group rounded-2xl bg-white/80 backdrop-blur p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <SectionHeader
              eyebrow="Contact"
              title="Let’s Automate Your Work"
              subtitle="Ready to bring automation to your business? Email us your idea and we’ll get back within 24 hours."
            />
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="mailto:mandharemeghraj@gmail.com?subject=WorkYaan%20Automation%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="font-semibold">Send Email</span>
              </a>
              <p className="mt-4 text-sm text-gray-500">mandharemeghraj@gmail.com</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange-100/60 to-transparent" />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold">WorkYaan</span>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} WorkYaan. Built with care in India.</p>
        </div>
      </footer>
    </div>
  )
}
