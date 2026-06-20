import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, User } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 dark:from-primary-900 dark:via-primary-950 dark:to-purple-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to transform your workflow?
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-primary-100 max-w-2xl mx-auto">
            Join 50,000+ professionals who are already working smarter with NexusAI.
            Start your free trial today.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 sm:mt-10 max-w-md mx-auto"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3" aria-label="Sign up for free trial">
              <div className="relative">
                <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-primary-300" />
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm sm:text-base"
                  aria-label="Your name"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-primary-300" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm sm:text-base"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl bg-white text-primary-700 font-semibold text-sm sm:text-base hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-primary-200">
                No credit card required. 14-day free trial.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-400" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Welcome aboard, {name}!</h3>
                <p className="text-primary-200 mt-1 text-sm">
                  Check your inbox at {email} for next steps.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
