import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-[#0B0F14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#667EEA] rounded-full blur-[120px]"
          style={{ animation: 'pulse 8s ease infinite' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[120px]"
          style={{ animation: 'pulse 8s ease infinite 2s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#667EEA] rounded-full" />
            <span className="label-text text-white/60">ABOUT US</span>
          </div>
          <h2 className="heading-lg text-white">
            Pioneering the future of
            <br />
            <span className="gradient-text">intelligent technology</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="body-lg text-white/80">
              At CRACOE, we're not just building software — we're architecting the future of
              business intelligence. Our team of visionary engineers and data scientists combines
              cutting-edge AI with deep industry expertise to deliver transformative solutions.
            </p>
            <p className="body-md text-white/70">
              From predictive analytics that forecast market trends to automation systems that
              revolutionize workflows, we empower organizations to make smarter decisions, faster.
              Our commitment to innovation drives us to push the boundaries of what's possible in
              FinTech, AI, and enterprise technology.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">150+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px]"
          >
            <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Neural Network Visualization */}
                <svg
                  className="w-full h-full opacity-60"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Nodes */}
                  <circle cx="100" cy="100" r="8" fill="#667EEA" className="animate-pulse" />
                  <circle cx="200" cy="80" r="8" fill="#8B5CF6" className="animate-pulse" />
                  <circle cx="300" cy="120" r="8" fill="#EC4899" className="animate-pulse" />
                  <circle cx="150" cy="200" r="8" fill="#667EEA" className="animate-pulse" />
                  <circle cx="250" cy="220" r="8" fill="#8B5CF6" className="animate-pulse" />
                  <circle cx="100" cy="300" r="8" fill="#EC4899" className="animate-pulse" />
                  <circle cx="300" cy="300" r="8" fill="#667EEA" className="animate-pulse" />

                  {/* Connections */}
                  <line
                    x1="100"
                    y1="100"
                    x2="200"
                    y2="80"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="200"
                    y1="80"
                    x2="300"
                    y2="120"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="100"
                    y1="100"
                    x2="150"
                    y2="200"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="300"
                    y1="120"
                    x2="250"
                    y2="220"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="150"
                    y1="200"
                    x2="100"
                    y2="300"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="250"
                    y1="220"
                    x2="300"
                    y2="300"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#667EEA" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#667EEA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}