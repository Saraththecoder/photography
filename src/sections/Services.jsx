import React from 'react';
import { Camera, Sparkles, Flame, User, Radio, Film } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const servicePackages = [
    {
      icon: <Camera className="w-6 h-6 text-gold" />,
      title: "Wedding Photography",
      description: "Complete luxury documentation from pre-ritual preparations to the grand departure, emphasizing candids, cinematic light, and premium portraits.",
      price: "₹1,50,000"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Pre-Wedding Shoots",
      description: "A half or full-day immersive editorial narrative in selected luxury locations, capturing the genuine story of your bond in moving visuals.",
      price: "₹60,000"
    },
    {
      icon: <Flame className="w-6 h-6 text-gold" />,
      title: "Traditional Events",
      description: "Vibrant and culturally-aware coverage of ceremonies (Haldi, Mehendi, Sangeet), preserving historical rituals, rich hues, and family bonds.",
      price: "₹75,000"
    },
    {
      icon: <User className="w-6 h-6 text-gold" />,
      title: "Portrait Sessions",
      description: "High-end personal branding, fashion editorials, and fine-art studio sessions utilizing precision lighting, contrast shadow-work, and retouching.",
      price: "₹35,000"
    },
    {
      icon: <Radio className="w-6 h-6 text-gold" />,
      title: "Drone Photography",
      description: "Expansive high-altitude drone coverages that add grand scale, breathtaking perspectives, and spatial context to your special venue's landscape.",
      price: "₹45,000"
    },
    {
      icon: <Film className="w-6 h-6 text-gold" />,
      title: "Cinematic Videography",
      description: "Stunning fine-art documentaries and reels. Edited with custom sound design, color grading, and emotional scores that feel like cinema films.",
      price: "₹2,00,000"
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 lg:py-32 bg-matte-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-[10px] tracking-[0.4em] text-silver/60 uppercase font-light">
            Luxury Offerings
          </span>
          <h2 className="text-4xl md:text-6xl text-soft-white font-serif tracking-wide mt-2">
            Services & Packages
          </h2>
          <p className="text-xs md:text-sm text-silver/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Invest in timeless memories. We provide premium visual storytelling tailored with elite attention to detail, cinematic color grading, and archival presentation.
          </p>
          <div className="w-12 h-[1px] bg-gold mt-6 mx-auto" />
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicePackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glassmorphism p-8 rounded-xl border border-white/5 flex flex-col justify-between group hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-500 shadow-xl relative overflow-hidden"
            >
              {/* Subtle sliding gold overlay on hover */}
              <span className="absolute inset-0 bg-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="relative z-10">
                {/* Custom Icon Wrapper */}
                <div className="w-12 h-12 bg-charcoal/80 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/30 group-hover:bg-matte-black transition-all duration-500">
                  {pkg.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl text-soft-white font-serif tracking-wide group-hover:text-gold transition-colors duration-300">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-silver/70 font-light mt-4 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Price Strip */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-silver/50 uppercase font-light">
                  Investment starting from
                </span>
                <span className="text-lg text-gold font-serif font-light tracking-wide group-hover:scale-105 transition-transform duration-300">
                  {pkg.price}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
