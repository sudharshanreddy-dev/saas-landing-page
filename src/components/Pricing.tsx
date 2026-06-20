import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Up to 3 team members',
      '10 AI automations / month',
      '5 integrations',
      'Basic analytics',
      'Community support',
      '1 GB storage',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      'Up to 25 team members',
      'Unlimited AI automations',
      'All integrations',
      'Advanced analytics & reports',
      'Priority email support',
      '50 GB storage',
      'Custom workflows',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs.',
    monthlyPrice: 79,
    yearlyPrice: 66,
    features: [
      'Unlimited team members',
      'Unlimited everything',
      'All integrations + custom',
      'Enterprise analytics',
      'Dedicated account manager',
      'Unlimited storage',
      'Custom AI model training',
      'SSO & SAML',
      'SLA guarantee',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-32 bg-surface-50 dark:bg-surface-950"
    >
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3 sm:mb-4">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-300">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              !isYearly
                ? 'text-surface-900 dark:text-white'
                : 'text-surface-400 dark:text-surface-500'
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              'relative h-6 w-11 sm:h-7 sm:w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              isYearly
                ? 'bg-primary-500'
                : 'bg-surface-300 dark:bg-surface-600'
            )}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={cn(
                'absolute top-0.5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white shadow-sm',
                isYearly ? 'left-[calc(100%-1.5rem)] sm:left-[calc(100%-1.625rem)]' : 'left-0.5'
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              isYearly
                ? 'text-surface-900 dark:text-white'
                : 'text-surface-400 dark:text-surface-500'
            )}
          >
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 rounded-full bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 text-[10px] sm:text-xs font-semibold"
            >
              Save 20%
            </motion.span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-start max-w-md sm:max-w-none mx-auto lg:max-w-none">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative rounded-2xl p-[1.5px]',
                plan.popular
                  ? 'bg-gradient-to-b from-primary-500 to-purple-600'
                  : 'bg-transparent'
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white text-[10px] sm:text-xs font-semibold shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={cn(
                  'rounded-xl p-5 sm:p-6 lg:p-8 h-full',
                  plan.popular
                    ? 'bg-white dark:bg-surface-900'
                    : 'bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700'
                )}
              >
                <h3 className="text-base sm:text-lg font-bold text-surface-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 mt-1">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-5 sm:mt-6 mb-5 sm:mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline gap-1"
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-900 dark:text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-surface-500 dark:text-surface-400 text-xs sm:text-sm">
                          / month
                        </span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p className="text-[10px] sm:text-xs text-surface-500 dark:text-surface-400 mt-1">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#cta"
                  className={cn(
                    'block w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5',
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                      : 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 hover:bg-surface-800 dark:hover:bg-surface-100 shadow-sm'
                  )}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className="my-4 sm:my-6 h-px bg-surface-200 dark:bg-surface-700" />

                {/* Features */}
                <ul className="space-y-2.5 sm:space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-surface-600 dark:text-surface-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
