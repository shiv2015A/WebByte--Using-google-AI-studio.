import { useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Modal from './components/Modal';
import StartupAnimation from './components/StartupAnimation';
import Chatbot from './components/Chatbot';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStartupDone, setIsStartupDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LayoutGroup>
      <div className="relative w-full min-h-screen selection:bg-primary/30 selection:text-white">
        <CustomCursor />
        
        <AnimatePresence>
          {!isStartupDone && (
            <StartupAnimation key="startup" onComplete={() => setIsStartupDone(true)} />
          )}
        </AnimatePresence>

        <BackgroundParticles />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="relative z-10">
              {isStartupDone ? (
                <motion.a 
                  href="#" 
                  layoutId="logo"
                  className="text-2xl font-display font-bold tracking-tighter text-white inline-block bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-2xl"
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  WebByTe<span className="text-primary">.</span>
                </motion.a>
              ) : (
                <div className="opacity-0 text-2xl font-display font-bold tracking-tighter text-white inline-block bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-2xl">
                  WebByTe<span className="text-primary">.</span>
                </div>
              )}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isStartupDone ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300"
            >
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: isStartupDone ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Let's Talk
            </motion.button>
          </div>
        </nav>

        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isStartupDone ? 1 : 0, y: isStartupDone ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero isStartupDone={isStartupDone} />
          <Services />
          <WhyChooseUs />
          <Process />
          <Consultation onOpenModal={() => setIsModalOpen(true)} />
        </motion.main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: isStartupDone ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Footer />
        </motion.footer>
        
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Chatbot />
      </div>
    </LayoutGroup>
  );
}
