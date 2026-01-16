import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Brain,
    title: 'Applied Artificial Intelligence',
    description:
      'Advanced AI solutions including machine learning, deep learning, and neural networks to transform business processes and unlock new possibilities.',
    large: true,
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Data-Driven Market Intelligence',
    description:
      'Harness advanced analytics and quantitative models to extract actionable insights from financial markets.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Smart Process Automation',
    description:
      'Intelligent automation solutions that streamline workflows and boost operational efficiency across your organization.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-4 md:px-8 bg-[#232636] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#667EEA] rounded-full" />
            <span className="label-text text-white/60">OUR SERVICES</span>
          </div>
          <h2 className="heading-lg text-white">
            We envision and create
            <br />
            <span className="gradient-text">tomorrow's future</span> now
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative glass-card rounded-3xl p-8 hover:glass-card-hover transition-all duration-500 cursor-pointer overflow-hidden ${service.large ? 'lg:col-span-2' : ''
                  }`}
                whileHover={{ y: -8 }}
              >
                {/* Neon glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 neon-glow rounded-3xl" />

                {/* Top border glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667EEA] to-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative z-10">
                  {/* Number */}
                  <div className="text-6xl font-bold text-white/5 mb-4">{service.number}</div>

                  {/* Icon */}
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-md text-white mb-4">{service.title}</h3>
                  <p className="body-md text-white/70 mb-6">{service.description}</p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#667EEA] font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}