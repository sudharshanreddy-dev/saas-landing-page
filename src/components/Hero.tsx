import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react';



const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: Star, value: '4.9/5', label: 'User Rating' },
  { icon: TrendingUp, value: '3x', label: 'Productivity Boost' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
              </span>
              Now in Public Beta
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-surface-900 dark:text-white leading-[1.1]"
            >
              Supercharge your{' '}
              <span className="gradient-text">workflow</span>{' '}
              with AI
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-surface-600 dark:text-surface-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              NexusAI automates repetitive tasks, streamlines team collaboration,
              and delivers actionable insights — so you can focus on what truly matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 rounded-xl shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-surface-700 dark:text-surface-200 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700 border border-surface-200 dark:border-surface-700 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <Play className="h-4 w-4 text-primary-500" />
                Watch Demo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex items-center gap-6 sm:gap-8 justify-center lg:justify-start"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                    <stat.icon className="h-4 w-4 text-primary-500" />
                    <span className="text-lg sm:text-xl font-bold text-surface-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative rounded-2xl overflow-hidden glow">
              {/* Dashboard Mockup */}
              <div className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center min-w-0">
                    <div className="px-2 sm:px-4 py-1 rounded-md bg-surface-100 dark:bg-surface-800 text-[10px] sm:text-xs text-surface-500 dark:text-surface-400 truncate">
                      app.nexusai.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-3 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                  {/* Top Metrics Row — responsive: 3 cols on tablet+, stack on mobile */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { label: 'Tasks', value: '1,284', change: '+23%', color: 'text-green-500' },
                      { label: 'Hours Saved', value: '342h', change: '+18%', color: 'text-green-500' },
                      { label: 'Score', value: '94/100', change: '+5%', color: 'text-green-500' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="p-2 sm:p-3 rounded-xl bg-surface-50 dark:bg-surface-900/50 border border-surface-100 dark:border-surface-700"
                      >
                        <p className="text-[9px] sm:text-[10px] text-surface-500 dark:text-surface-400 uppercase tracking-wider truncate">{m.label}</p>
                        <div className="flex items-end gap-1 mt-0.5 sm:mt-1">
                          <p className="text-sm sm:text-lg font-bold text-surface-900 dark:text-white">{m.value}</p>
                          <span className={`text-[9px] sm:text-[10px] font-semibold ${m.color}`}>{m.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="rounded-xl bg-surface-50 dark:bg-surface-900/50 border border-surface-100 dark:border-surface-700 p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <p className="text-[10px] sm:text-xs font-semibold text-surface-700 dark:text-surface-200">Productivity Trend</p>
                      <span className="text-[9px] sm:text-[10px] text-primary-500 font-medium">This Week</span>
                    </div>
                    {/* Simulated Chart */}
                    <div className="flex items-end gap-1 sm:gap-1.5 h-16 sm:h-20">
                      {[35, 50, 42, 65, 58, 78, 72, 85, 90, 82, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-primary-500 to-primary-400 opacity-80 hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>

                  {/* AI Assistant Bar */}
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-950/30 dark:to-purple-950/30 border border-primary-100 dark:border-primary-900/50">
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 shrink-0">
                      <span className="text-white text-[9px] sm:text-xs font-bold">AI</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs text-surface-700 dark:text-surface-200 font-medium truncate">
                        &quot;3 tasks can be automated to save 4h/week.&quot;
                      </p>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-primary-600 dark:text-primary-400 font-semibold whitespace-nowrap">View</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements — hidden on very small screens, shown on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden sm:block absolute -bottom-4 -left-4 bg-white dark:bg-surface-800 rounded-xl shadow-xl border border-surface-200 dark:border-surface-700 p-3 flex items-center gap-2"
            >
              <div className="flex -space-x-2">
                {['bg-primary-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400'].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${bg} border-2 border-white dark:border-surface-800 flex items-center justify-center text-[10px] text-white font-bold`}
                  >
                    {['S', 'M', 'A', 'J'][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-surface-600 dark:text-surface-300 font-medium">+2.4k online</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted By Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-24"
        >
          <p className="text-center text-xs sm:text-sm text-surface-400 dark:text-surface-500 font-medium uppercase tracking-wider mb-6 sm:mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-4 opacity-50 dark:opacity-30">
            {['Acme Corp', 'TechFlow', 'DataSync', 'CloudNine', 'Buildify'].map((name) => (
              <span key={name} className="text-sm sm:text-xl font-bold text-surface-400 dark:text-surface-500 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
