export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F14] border-t border-white/10 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">CRACOE</h3>
            <p className="text-sm text-white/60 uppercase tracking-wider">
              Visualizing this world and the next
            </p>
          </div>

          {/* Discover More */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Discover More
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white hover:text-[#667EEA] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#667EEA] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/our-team.html" className="text-white hover:text-[#667EEA] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/work.html" className="text-white hover:text-[#667EEA] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#667EEA] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/cracoe__official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#667EEA] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cracoe-undefined-a61219387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#667EEA] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/CRACOE_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#667EEA] transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-white mb-4">info@cracoe.com</p>
            <p className="text-sm text-white/70 leading-relaxed">
              H448 High School Road
              <br />
              P.Velur, Namakkal
              <br />
              Tamil Nadu, India
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>
            © 2025 CRACOE. All rights reserved. |{' '}
            <a href="/privacy-policy.html" className="hover:text-white transition-colors underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}