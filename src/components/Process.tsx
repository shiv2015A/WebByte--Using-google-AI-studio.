import { motion } from 'motion/react';
import { MessageSquare, Target, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'We discuss your goals, target audience, and vision for the project.',
    icon: MessageSquare,
  },
  {
    title: 'Strategy',
    description: 'We create a comprehensive plan and architecture for your website.',
    icon: Target,
  },
  {
    title: 'Design',
    description: 'We craft a premium, high-end UI/UX design tailored to your brand.',
    icon: PenTool,
  },
  {
    title: 'Development',
    description: 'We build your site using cutting-edge technologies for maximum performance.',
    icon: Code,
  },
  {
    title: 'Launch',
    description: 'We deploy your website and ensure everything runs flawlessly.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative z-10 bg-black/95 backdrop-blur-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A streamlined approach to delivering award-winning websites.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-10 text-6xl font-display font-bold text-white/5 group-hover:text-primary/20 transition-colors duration-500 pointer-events-none">
                  0{index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-bg border-2 border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(124,92,255,0.3)] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-gray-400 group-hover:text-secondary transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
