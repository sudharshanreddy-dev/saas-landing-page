import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Workflow,
  Shield,
  Zap,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Automation',
    description:
      'Let AI handle repetitive tasks automatically. From data entry to report generation, NexusAI learns your patterns and works for you.',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description:
      'Get actionable insights with real-time dashboards and predictive analytics. Make data-driven decisions faster than ever.',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: Workflow,
    title: 'Seamless Integrations',
    description:
      'Connect with 200+ tools you already use. Slack, Notion, GitHub, Jira — NexusAI works where your team works.',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified. End-to-end encryption, SSO, and granular access controls keep your data safe and compliant.',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built for speed. Sub-100ms response times with edge computing ensure your team never waits. 99.99% uptime guaranteed.',
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
  },
  {
    icon: Globe,
    title: 'Global Collaboration',
    description:
      'Real-time collaboration across time zones. AI-powered translation, async workflows, and smart notifications keep everyone aligned.',
    gradient: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 lg:py-32 bg-white dark:bg-surface-900"
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
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
            Everything you need to{' '}
            <span className="gradient-text">work smarter</span>
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-300">
            Powerful features designed to eliminate busywork and amplify your team's
            output. No complexity, just results.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl bg-surface-50 dark:bg-surface-800/50 border border-surface-100 dark:border-surface-700/50 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4 sm:mb-5`}
              >
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-surface-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
