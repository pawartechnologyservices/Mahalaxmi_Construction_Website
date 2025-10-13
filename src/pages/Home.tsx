import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Truck, Package, Mountain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Marquee } from "@/components/Marquee";
import heroImage from "@/assets/hero-home.jpg";
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
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Mahalaxmi <span className="gradient-text">Infrasolution</span>
            </h1>
            <p className="text-2xl text-white/90 mb-8">
              Developing Infra for a Better Tomorrow
            </p>

            {/* Project Marquee */}
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 mb-8">
              <Marquee speed={40}>
                {projects.map((project, index) => (
                  <span key={index} className="text-primary font-semibold whitespace-nowrap">
                    {project}
                  </span>
                ))}
              </Marquee>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="animate-pulse-glow">
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 9, suffix: "+", label: "Years of Experience" },
              { end: 30, suffix: "+", label: "Team Members" },
              { end: 10, suffix: "+", label: "Major Clients" },
              { end: 100, suffix: "%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>

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
                <Card className="overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="h-12 w-12 text-primary mb-2" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Trusted Partners
          </motion.h2>

          <Marquee speed={25}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card rounded-lg px-8 py-6 shadow-md min-w-[200px] text-center"
              >
                <p className="text-xl font-bold">{client}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Home;
