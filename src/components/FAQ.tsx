import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const faqs = [
  {
    id: 'faq-1',
    question: 'How does NexusAI differ from other productivity tools?',
    answer:
      "NexusAI is built with AI at its core \u2014 not bolted on as an afterthought. Our proprietary AI engine learns your team's unique patterns and proactively automates tasks, surfaces insights, and optimizes workflows.",
  },
  {
    id: 'faq-2',
    question: 'Is there a free trial?',
    answer:
      "Yes! Our Starter plan is completely free and includes 10 AI automations per month, 5 integrations, and support for up to 3 team members. The Pro plan also comes with a 14-day free trial with no credit card required.",
  },
  {
    id: 'faq-3',
    question: 'How secure is my data?',
    answer:
      'Security is our top priority. NexusAI is SOC 2 Type II certified, uses AES-256 encryption at rest and TLS 1.3 in transit, and supports SSO/SAML for enterprise customers. We never train our AI models on your proprietary data.',
  },
  {
    id: 'faq-4',
    question: 'Can I integrate NexusAI with my existing tools?',
    answer:
      'Absolutely. NexusAI integrates with 200+ popular tools including Slack, Microsoft Teams, GitHub, Jira, Notion, Google Workspace, Salesforce, and more. We also offer a REST API and webhooks for custom integrations.',
  },
  {
    id: 'faq-5',
    question: 'What happens if I exceed my plan limits?',
    answer:
      "We'll never cut you off mid-workflow. If you approach your limits, we'll notify you and suggest an upgrade. You can also purchase add-ons for specific resources without changing your plan. Enterprise customers enjoy truly unlimited usage.",
  },
  {
    id: 'faq-6',
    question: 'Do you offer a money-back guarantee?',
    answer:
      "Yes, we offer a 30-day money-back guarantee on all paid plans. If NexusAI doesn't meet your expectations, contact our support team within 30 days of purchase for a full refund \u2014 no questions asked.",
  },
  {
    id: 'faq-7',
    question: 'Can NexusAI be deployed on-premise?',
    answer:
      "Yes, our Enterprise plan supports on-premise and private cloud deployments. This gives you full control over your data and infrastructure while still benefiting from NexusAI's powerful AI capabilities.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  const answerId = `${faq.id}-answer`;
  const buttonId = `${faq.id}-button`;

  return (
    <div
      className={cn(
        'border rounded-xl transition-all duration-300',
        isOpen
          ? 'border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-950/20 shadow-sm'
          : 'border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800/30'
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={toggle}
          className="flex items-center justify-between w-full p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 rounded-xl"
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          <span className="text-sm sm:text-base font-semibold text-surface-900 dark:text-white pr-3 sm:pr-4 leading-snug">
            {faq.question}
          </span>
          <ChevronDown
            className={cn(
              'h-4 w-4 sm:h-5 sm:w-5 text-surface-400 dark:text-surface-500 shrink-0 transition-transform duration-300',
              isOpen && 'rotate-180 text-primary-500'
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-32 bg-white dark:bg-surface-900"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-14"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-300">
            Everything you need to know about NexusAI.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2.5 sm:space-y-3"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
