import { motion } from 'framer-motion';
import { UserPlus, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Connect Your Tools',
    description:
      'Sign up in under 2 minutes and connect the tools your team already uses. Our setup wizard makes integration effortless.',
    gradient: 'from-primary-500 to-indigo-600',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Learns Your Workflow',
    description:
      'NexusAI analyzes your patterns, identifies bottlenecks, and automatically suggests optimizations tailored to your team.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Ship Faster',
    description:
      'Watch your productivity soar. Automated tasks, smart prioritization, and AI insights help you deliver 3x faster.',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 lg:py-32 bg-surface-50 dark:bg-surface-950"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3 sm:mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
            Up and running in{' '}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-300">
            Three simple steps to transform how your team works. No steep learning
            curve, no complex setup.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line — hidden on sm, shown on md+ */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(80%)] h-px bg-gradient-to-r from-surface-300 dark:from-surface-700 to-transparent" />
              )}

              {/* Step number */}
              <div className="relative inline-flex mb-5 sm:mb-6">
                <div
                  className={`h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}
                >
                  <step.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <span className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full bg-white dark:bg-surface-800 border-2 border-primary-500 flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary-600 dark:text-primary-400 shadow-sm">
                  {step.step}
                </span>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-surface-900 dark:text-white mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-surface-600 dark:text-surface-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
