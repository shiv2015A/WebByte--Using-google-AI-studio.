import { motion } from 'motion/react';
import { Briefcase, Rocket, User, Layout, RefreshCw, Zap } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    description: 'High-end corporate websites that establish authority and trust.',
    icon: Briefcase,
  },
  {
    title: 'Startup Landing Pages',
    description: 'Conversion-focused landing pages to launch your next big idea.',
    icon: Rocket,
  },
  {
    title: 'Personal Brand Websites',
    description: 'Premium portfolios for creators, consultants, and professionals.',
    icon: User,
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcase your work with cinematic animations and smooth interactions.',
    icon: Layout,
  },
  {
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-performance experience.',
    icon: RefreshCw,
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and SEO-ready architecture.',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative z-10 bg-black/50 backdrop-blur-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We build digital experiences that elevate your brand and drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-[-1]" />
              
              <div className="relative h-full bg-bg/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gray-300 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
