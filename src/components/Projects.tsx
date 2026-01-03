import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Analytics Platform',
    client: 'Global Investment Firm',
    description:
      'Real-time market intelligence platform processing billions of data points for actionable financial insights.',
    image:
      'https://images.unsplash.com/photo-1664070719373-7648af3b35bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxncmFkaWVudCUyMGFic3RyYWN0JTIwd2F2ZXMlMjBmbG93aW5nfGVufDB8MHx8cHVycGxlfDE3NjI0Mzc0NTN8MA&ixlib=rb-4.1.0&q=85',
    attribution: 'BoliviaInteligente on Unsplash',
  },
  {
    title: 'AI-Powered Automation Suite',
    client: 'Enterprise Technology Leader',
    description:
      'Comprehensive automation solution reducing manual tasks by 85% across 50+ enterprise workflows.',
    image:
      'https://images.unsplash.com/photo-1658937364065-60f3f6818724?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxncmFkaWVudCUyMGFic3RyYWN0JTIwd2F2ZXMlMjBmbG93aW5nfGVufDB8MHx8cHVycGxlfDE3NjI0Mzc0NTN8MA&ixlib=rb-4.1.0&q=85',
    attribution: 'Maxim Berg on Unsplash',
  },
  {
    title: 'Neural Network Architecture',
    client: 'AI Research Institute',
    description:
      'Revolutionary neural network improving processing efficiency by 300% for real-time AI decision-making.',
    image:
      'https://images.unsplash.com/photo-1610311911648-24d33745eb39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxncmFkaWVudCUyMGFic3RyYWN0JTIwd2F2ZXMlMjBmbG93aW5nfGVufDB8MHx8cHVycGxlfDE3NjI0Mzc0NTN8MA&ixlib=rb-4.1.0&q=85',
    attribution: 'Pawel Czerwinski on Unsplash',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-[#0B0F14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#EC4899] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#667EEA] rounded-full" />
            <span className="label-text text-white/60">CASE STUDIES</span>
          </div>
          <h2 className="heading-lg text-white">
            Transforming ideas into
            <br />
            <span className="gradient-text">intelligent solutions</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card rounded-3xl p-8 lg:p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full w-fit mb-6">
                        <span className="w-2 h-2 bg-[#667EEA] rounded-full" />
                        <span className="text-sm text-white/80">{project.client}</span>
                      </div>
                      <h3 className="heading-md text-white mb-4">{project.title}</h3>
                      <p className="body-md text-white/70 mb-8">{project.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#667EEA] font-semibold hover:gap-3 transition-all"
                      >
                        <span>View Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Image */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.attribution}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:glass-card-hover transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-[#667EEA]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:glass-card-hover transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}