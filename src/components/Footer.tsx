import { motion } from 'motion/react';
import { Linkedin, Instagram, Github } from 'lucide-react';
import { useState } from 'react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4 text-sm leading-relaxed">
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">1. Information We Collect</h3>
      <p>We collect information that you provide directly to us, including when you fill out a form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, company name, and any other information you choose to provide.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">2. How We Use Your Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, to process your requests and transactions, to communicate with you, and to monitor and analyze trends, usage, and activities in connection with our services.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">3. Information Sharing</h3>
      <p>We do not share your personal information with third parties except as described in this privacy policy or as required by law. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">4. Security</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">5. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at shivanshdubey1108@gmail.com.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-sm leading-relaxed">
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">1. Acceptance of Terms</h3>
      <p>By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">2. Description of Service</h3>
      <p>WebByTe provides web design, development, and digital marketing services. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">3. User Conduct</h3>
      <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">4. Intellectual Property</h3>
      <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of WebByTe or its content suppliers and protected by international copyright laws.</p>
      
      <h3 className="text-lg font-semibold text-white mt-6">5. Limitation of Liability</h3>
      <p>In no event shall WebByTe be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from the use or the inability to use the services.</p>
    </div>
  );

  return (
    <footer className="py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold mb-6 text-white"
            >
              WebByTe<span className="text-primary">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 max-w-sm leading-relaxed mb-8"
            >
              Websites That Make Businesses Look Expensive. We craft premium digital experiences for modern brands.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: 'https://www.instagram.com/webbyte._?igsh=MTJ5b2hxdmxqbW10aQ==' },
                { Icon: Github, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Services', 'Process', 'About Us', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:shivanshdubey1108@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  shivanshdubey1108@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9241762133" className="text-gray-400 hover:text-white transition-colors duration-300">
                  9241762133
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} WebByTe Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors duration-300">Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors duration-300">Terms of Service</button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy" 
        content={privacyContent} 
      />
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service" 
        content={termsContent} 
      />
    </footer>
  );
}
