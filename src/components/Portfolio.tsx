import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Aura Fintech',
    category: 'Corporate Website',
    image: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    title: 'Lumina Studio',
    category: 'Creative Portfolio',
    image: 'https://picsum.photos/seed/studio/800/600',
  },
  {
    title: 'Nova E-Commerce',
    category: 'Online Store',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    title: 'Nexus SaaS',
    category: 'Startup Landing Page',
    image: 'https://picsum.photos/seed/saas/800/600',
  },
  {
    title: 'Oasis Wellness',
    category: 'Health & Beauty',
    image: 'https://picsum.photos/seed/wellness/800/600',
  },
  {
    title: 'Vertex Real Estate',
    category: 'Property Listing',
    image: 'https://picsum.photos/seed/realestate/800/600',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 relative z-10 bg-black/90 backdrop-blur-3xl border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 max-w-2xl text-lg"
            >
              A glimpse into the premium digital experiences we've crafted for our clients.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-secondary font-medium tracking-wider text-sm mb-2 uppercase">
                  {project.category}
                </p>
                <h3 className="text-3xl font-display font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
