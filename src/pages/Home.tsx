import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Truck, Package, Mountain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Marquee } from "@/components/Marquee";
import { useEffect } from "react";
import heroVideo from "@/assets/video/hero_video.mp4";
import heroFallback from "@/assets/hero-home.jpg"; // Fallback image
import roadService from "@/assets/service-road.jpg";
import earthworkService from "@/assets/service-earthwork.jpg";
import materialService from "@/assets/service-material.jpg";
import miningService from "@/assets/service-mining.jpg";
import powerplantService from "@/assets/service-powerplant.jpg";
import clientLT from "@/assets/client-lt.jpg";
import clientAppco from "@/assets/client-appco.jpg";
import clientNTPC from "@/assets/client-ntpc.jpg";
import clientJSW from "@/assets/client-jsw.jpg";
import clientBalajee from "@/assets/client-balajee.jpg";
import clientNCL from "@/assets/client-ncl.jpg";
import clientMahanandi from "@/assets/client-mahanandi.jpg";

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

const clientsData = [
  {
    name: "Larsen & Toubro (L&T)",
    category: "Engineering & Construction",
    projects: "Multiple infrastructure projects",
    image: clientLT,
  },
  {
    name: "Appco Infrastructure Pvt Ltd",
    category: "Highway Development",
    projects: "Samruddhi Mahamarg Project",
    image: clientAppco,
  },
  {
    name: "NTPC Ramagundam",
    category: "Power Generation",
    projects: "Plant infrastructure development",
    image: clientNTPC,
  },
  {
    name: "Mahanandi Coal Mines (MCL)",
    category: "Coal Mining",
    projects: "OB Removal & Earth Work",
    image: clientMahanandi,
  },
  {
    name: "Domngamova Mines",
    category: "Mining Operations",
    projects: "Mining infrastructure",
    image: clientMahanandi,
  },
  {
    name: "Balajee Construction",
    category: "Construction",
    projects: "Dozing & Earth Work",
    image: clientBalajee,
  },
  {
    name: "Northern Coalfields Ltd (NCL)",
    category: "Coal Mining",
    projects: "Grading & Compaction Work",
    image: clientNCL,
  },
  {
    name: "NTPC Corba",
    category: "Power Generation",
    projects: "Civil works & infrastructure",
    image: clientNTPC,
  },
  {
    name: "JSW Panvel",
    category: "Steel Manufacturing",
    projects: "Industrial infrastructure",
    image: clientJSW,
  },
  {
    name: "Triveni Mining",
    category: "Mining Operations",
    projects: "Mining support services",
    image: clientMahanandi,
  },
  {
    name: "Upadhyey Construction",
    category: "Construction",
    projects: "Infrastructure projects",
    image: clientBalajee,
  },
  {
    name: "Bhilai Steel Plant",
    category: "Steel Manufacturing",
    projects: "Coal handling plant",
    image: clientJSW,
  },
];

const clients = [
  { name: "L&T", image: clientLT },
  { name: "Appco", image: clientAppco },
  { name: "NTPC", image: clientNTPC },
  { name: "JSW", image: clientJSW },
  { name: "Balajee Construction", image: clientBalajee },
  { name: "NCL", image: clientNCL },
  { name: "NTPC Corba", image: clientNTPC },
  { name: "Mahanandi Coal Mines", image: clientMahanandi },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "L&T Construction",
    text: "Outstanding work quality and timely delivery. Mahalaxmi Infrasolution has been our trusted partner for multiple projects. Their attention to detail and commitment to excellence is truly commendable.",
    rating: 5,
    project: "Highway Construction Project",
  },
  {
    name: "Priya Sharma",
    position: "Site Engineer",
    company: "NTPC Ramagundam",
    text: "Professional team with excellent equipment. Their commitment to safety and quality is commendable. We've worked with them on several power plant infrastructure projects and they've never disappointed.",
    rating: 5,
    project: "Plant Infrastructure Development",
  },
  {
    name: "Amit Patel",
    position: "Operations Head",
    company: "JSW Group",
    text: "Reliable and efficient service. They completed our mining project ahead of schedule with top-notch quality. The team's expertise in handling complex projects is remarkable.",
    rating: 5,
    project: "Industrial Infrastructure",
  },
  {
    name: "Suresh Rao",
    position: "Project Director",
    company: "Appco Infrastructure",
    text: "Working with Mahalaxmi Infrasolution on the Samruddhi Mahamarg project has been a great experience. Their modern equipment and skilled workforce ensure smooth project execution.",
    rating: 5,
    project: "Samruddhi Mahamarg",
  },
  {
    name: "Dr. Anita Deshmukh",
    position: "Chief Engineer",
    company: "Mahanandi Coal Mines",
    text: "Excellent execution of OB removal and earth work projects. Their safety protocols and quality standards are industry-leading. Highly recommend for mining operations.",
    rating: 5,
    project: "Mining Operations",
  },
  {
    name: "Vikram Singh",
    position: "Construction Manager",
    company: "Balajee Construction",
    text: "Mahalaxmi Infrasolution's dozing and earth work services are exceptional. They bring the right combination of equipment, expertise, and professionalism to every project.",
    rating: 5,
    project: "Dozing & Earth Work",
  },
];

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="mb-4 pb-4 border-b relative z-10">
                    <p className="text-sm text-primary font-semibold">
                      Project: {testimonial.project}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        
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

          <Marquee speed={30}>
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative glass-card rounded-3xl p-8 min-w-[280px] border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo Container */}
                  <div className="relative flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted/50 p-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={client.image} 
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Client Name */}
                    <p className="text-[18px] font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                      {client.name}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Detailed Client List */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Our Esteemed <span className="gradient-text">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Building lasting partnerships with industry leaders
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientsData.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="premium-card border-2 border-primary/20 p-6 h-full group overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background to-muted">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{client.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{client.category}</p>
                  <p className="text-sm text-muted-foreground">{client.projects}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Industries We <span className="gradient-text">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Delivering excellence across diverse sectors
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏗️", name: "Construction" },
              { icon: "⚡", name: "Power Generation" },
              { icon: "⛏️", name: "Mining" },
              { icon: "🏭", name: "Manufacturing" },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <div className="text-5xl mb-3 animate-float">{industry.icon}</div>
                  <p className="font-semibold">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Why Clients <span className="gradient-text">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Our commitment to excellence sets us apart
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Quality Assured", desc: "ISO standard processes", icon: "✓" },
              { title: "On-Time Delivery", desc: "100% project completion rate", icon: "⏰" },
              { title: "Expert Team", desc: "30+ skilled professionals", icon: "👥" },
              { title: "Modern Equipment", desc: "Latest machinery & technology", icon: "🚜" },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="premium-card p-6 text-center h-full border-2 border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Satisfaction Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4"
          >
            Client <span className="gradient-text">Satisfaction</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Numbers that reflect our dedication
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "10+", label: "Major Clients" },
              { value: "6+", label: "Projects Completed" },
              { value: "9+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card p-8 text-center border-2 border-primary/20">
                  <p className="text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing list of satisfied clients and experience quality infrastructure development with Mahalaxmi Infrasolution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-10 py-6 hover:scale-105 transition-transform animate-pulse-glow">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;