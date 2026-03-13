import { motion } from 'motion/react';
import { Zap, Palette, Smartphone, Search, Target } from 'lucide-react';

const reasons = [
  {
    title: 'Lightning-fast performance',
    description: 'Optimized code and assets for instant load times.',
    icon: Zap,
  },
  {
    title: 'Premium UI/UX design',
    description: 'Cinematic animations and high-end aesthetics.',
    icon: Palette,
  },
  {
    title: 'Mobile-first development',
    description: 'Flawless experience across all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    title: 'SEO-ready websites',
    description: 'Built with best practices to rank higher on search engines.',
    icon: Search,
  },
  {
    title: 'Conversion-focused design',
    description: 'Strategic layouts that turn visitors into paying clients.',
    icon: Target,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 px-6 relative z-10 bg-black/80 backdrop-blur-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Why Choose <span className="text-gradient">WebByTe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't just build websites; we craft digital experiences that make your business look expensive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
