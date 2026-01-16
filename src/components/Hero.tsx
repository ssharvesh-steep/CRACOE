import { motion } from 'framer-motion';
import { Brain, BarChart3, Zap, ArrowRight } from 'lucide-react';

const floatingCards = [
  {
    icon: Brain,
    title: 'AI Solutions',
    subtitle: 'Advanced Intelligence',
    delay: 0,
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    subtitle: 'Market Insights',
    delay: 0.2,
  },
  {
    icon: Zap,
    title: 'Automation',
    subtitle: 'Smart Workflows',
    delay: 0.4,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 md:px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-aurora opacity-90 z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            animation: 'gradientShift 10s ease infinite',
          }}
        />
      </div>

      {/* Particles */}
      <div
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px, 150px 150px, 200px 200px',
          animation: 'particleFloat 20s linear infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="w-2 h-2 bg-white rounded-full"
              style={{ animation: 'pulse 2s ease infinite' }}
            />
            <span className="label-text text-white">AI-DRIVEN INNOVATION</span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-white mb-6">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Businesses with
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Next-Gen Intelligence
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="body-lg text-white/80 mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building the future of automation, FinTech, and intelligent systems — today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B0F14] rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white rounded-lg font-semibold hover:glass-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="relative h-[500px] hidden lg:block">
          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            const positions = [
              { top: '10%', left: '10%' },
              { top: '40%', right: '10%' },
              { bottom: '10%', left: '20%' },
            ];

            return (
              <motion.div
                key={index}
                className="absolute glass-card rounded-2xl p-6 hover:glass-card-hover hover:neon-glow transition-all duration-500 cursor-pointer"
                style={{
                  ...positions[index],
                  width: '280px',
                  animation: `float 6s ease-in-out infinite ${index * 2}s`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: card.delay }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/70">{card.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
        <span className="label-text text-white text-xs">SCROLL</span>
      </motion.div>
    </section>
  );
}