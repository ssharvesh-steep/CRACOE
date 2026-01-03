import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { number: '01', text: 'Home', href: '/' },
  { number: '02', text: 'Services', href: '#services' },
  { number: '03', text: 'Team', href: '/our-team.html' },
  { number: '04', text: 'Work', href: '/work.html' },
  { number: '05', text: 'Contact', href: '#contact' },
];

export default function Menu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#0B0F14] z-[2000] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-[#667EEA] transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Menu Items */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#667EEA] hover:to-[#8B5CF6] transition-all"
              >
                <span className="text-2xl text-white/30 font-mono">{item.number}</span>
                <span className="text-4xl md:text-6xl font-bold font-['Poppins'] group-hover:translate-x-4 transition-transform">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-white/10 py-8"
          >
            <div className="flex justify-center gap-8">
              <a
                href="https://www.instagram.com/cracoe__official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white uppercase tracking-wider transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/cracoe-undefined-a61219387/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white uppercase tracking-wider transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/CRACOE_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white uppercase tracking-wider transition-colors"
              >
                X
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}