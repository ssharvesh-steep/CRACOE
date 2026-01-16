import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'CRACOE transformed our data infrastructure with their AI-powered analytics platform. The insights we gain have revolutionized our decision-making process.',
    author: 'Sarah Chen',
    role: 'CTO, FinTech Innovations',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote:
      'Their automation solutions reduced our operational costs by 60% while improving accuracy. The team\'s expertise in AI is unmatched.',
    author: 'Michael Rodriguez',
    role: 'VP of Operations, Global Enterprises',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    quote:
      'Working with CRACOE has been transformative. Their innovative approach to machine learning has given us a competitive edge in the market.',
    author: 'Emily Watson',
    role: 'CEO, Tech Ventures',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-[#232636] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#667EEA] rounded-full" />
            <span className="label-text text-white/60">TESTIMONIALS</span>
          </div>
          <h2 className="heading-lg text-white">
            Trusted by industry
            <br />
            <span className="gradient-text">leaders worldwide</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-card rounded-3xl p-8 hover:glass-card-hover hover:neon-glow transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Quote */}
              <p className="body-md text-white/80 mb-8 italic">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full ring-2 ring-[#667EEA]/50"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}