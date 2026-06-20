import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow',
    initials: 'SC',
    color: 'bg-violet-500',
    rating: 5,
    text: 'NexusAI cut our sprint planning time by 60%. The AI suggestions are remarkably accurate — it feels like having a senior PM on the team 24/7.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'DataSync',
    initials: 'MR',
    color: 'bg-emerald-500',
    rating: 5,
    text: "We evaluated 12 productivity tools before choosing NexusAI. Nothing else comes close in terms of AI capability and ease of use. It's genuinely transformative.",
  },
  {
    name: 'Emily Zhao',
    role: 'Product Lead',
    company: 'CloudNine',
    initials: 'EZ',
    color: 'bg-blue-500',
    rating: 5,
    text: "Our team's output increased 3x within the first month. The automated reporting alone saves us 15 hours per week. Best investment we've made.",
  },
  {
    name: 'James Okafor',
    role: 'Engineering Manager',
    company: 'Buildify',
    initials: 'JO',
    color: 'bg-amber-500',
    rating: 5,
    text: "The integrations are flawless. NexusAI connects all our tools into one seamless workflow. My engineers can finally focus on building, not context-switching.",
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    company: 'Acme Corp',
    initials: 'PP',
    color: 'bg-rose-500',
    rating: 5,
    text: "I was skeptical about AI productivity tools, but NexusAI proved me wrong. The ROI was visible within the first week. Our meeting time dropped by 40%.",
  },
  {
    name: 'Alex Lindstr\u00f6m',
    role: 'Founder & CEO',
    company: 'Nordic Labs',
    initials: 'AL',
    color: 'bg-indigo-500',
    rating: 5,
    text: "As a startup, every minute counts. NexusAI helps our 8-person team operate like a 30-person company. The AI workflow automation is pure magic.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-32 bg-white dark:bg-surface-900 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
            Loved by teams{' '}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-300">
            Don&apos;t just take our word for it. Here&apos;s what leaders at top companies
            have to say about NexusAI.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-surface-50 dark:bg-surface-800/50 border border-surface-100 dark:border-surface-700/50 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="h-7 w-7 text-primary-200 dark:text-primary-900 mb-3 sm:mb-4" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-surface-700 dark:text-surface-300 leading-relaxed mb-4 sm:mb-6">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-surface-900 dark:text-white truncate">
                    {t.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-surface-500 dark:text-surface-400 truncate">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
