import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Truck, Package, Mountain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Marquee } from "@/components/Marquee";
import heroVideo from "@/assets/video/hero_video.mp4";
import heroFallback from "@/assets/hero-home.jpg"; // Fallback image
import roadService from "@/assets/service-road.jpg";
import earthworkService from "@/assets/service-earthwork.jpg";
import materialService from "@/assets/service-material.jpg";
import miningService from "@/assets/service-mining.jpg";
import powerplantService from "@/assets/service-powerplant.jpg";

const projects = [
  "OB Removal Work (MCL)",
  "Coal Handling (Bhilai Steel Plant)",
  "Grading & Compaction (NCL)",
  "Dozing Work (Balajee Construction)",
  "Earth Work & Excavation (MCL)",
  "Samruddhi Mahamarg (Appco)",
];

const services = [
  {
    title: "Road Construction",
    description: "Professional highway and road building with modern equipment and techniques",
    icon: Building,
    image: roadService,
  },
  {
    title: "Earth Work",
    description: "Expert excavation, grading, and land preparation for construction projects",
    icon: Mountain,
    image: earthworkService,
  },
  {
    title: "Material Supply",
    description: "Quality construction materials delivered on time to your project site",
    icon: Package,
    image: materialService,
  },
  {
    title: "Mining",
    description: "Specialized mining operations with heavy equipment and skilled workforce",
    icon: Truck,
    image: miningService,
  },
  {
    title: "Power Plant Projects",
    description: "Infrastructure development for energy sector with precision and safety",
    icon: Zap,
    image: powerplantService,
  },
];

const clients = ["L&T", "Appco", "NTPC", "JSW", "Balajee Construction", "NCL", "NTPC Corba", "Mahanandi Coal Mines"];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "L&T Construction",
    text: "Outstanding work quality and timely delivery. Mahalaxmi Infrasolution has been our trusted partner for multiple projects.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "NTPC Ramagundam",
    text: "Professional team with excellent equipment. Their commitment to safety and quality is commendable.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "JSW Group",
    text: "Reliable and efficient service. They completed our mining project ahead of schedule with top-notch quality.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster={heroFallback}
            onError={(e) => {
              // Fallback if video fails to load
              const video = e.target as HTMLVideoElement;
              video.style.display = 'none';
              const fallback = document.getElementById('hero-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Add additional formats for better browser support */}
            <source src={heroVideo.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback Image */}
          <div 
            id="hero-fallback"
            className="absolute inset-0 w-full h-full bg-cover bg-center hidden"
            style={{ backgroundImage: `url(${heroFallback})` }}
          />
        </div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Mahalaxmi <span className="gradient-text text-glow">Infrasolution</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Developing Infra for a Better Tomorrow
            </motion.p>

            {/* Project Marquee with Glass Effect */}
            <motion.div 
              className=" rounded-2xl p-4 mb-8 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Marquee speed={40}>
                {projects.map((project, index) => (
                  <span key={index} className="text-primary font-semibold whitespace-nowrap text-lg ">
                    {project}
                  </span>
                ))}
              </Marquee>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/projects">
                <Button size="lg" className="animate-pulse-glow text-lg px-8 py-6 hover:scale-105 transition-transform">
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Our <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Numbers that speak for our excellence
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 9, suffix: "+", label: "Years of Experience" },
              { end: 30, suffix: "+", label: "Team Members" },
              { end: 10, suffix: "+", label: "Major Clients" },
              { end: 100, suffix: "%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 border-2 border-primary/20">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  <p className="text-lg font-semibold mt-3">{stat.label}</p>
                  <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">Excellence in every project we undertake</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full group cursor-pointer premium-card border-2">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 shimmer" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                      <service.icon className="h-14 w-14 text-primary drop-shadow-lg animate-float" />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-foreground">
                      Premium
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-card to-muted/20">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">Real feedback from real partnerships</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <Card className="p-8 h-full premium-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                  <div className="flex mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-primary text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic text-lg leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="relative z-10">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Our Trusted <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">Industry leaders who trust us</p>
          </motion.div>

          <Marquee speed={25}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl px-10 py-8 min-w-[250px] text-center hover:scale-110 transition-all duration-300 border-2 border-primary/20"
              >
                <p className="text-2xl font-bold gradient-text">{client}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Home;