import { motion } from "framer-motion";
import { Building, Mountain, Package, Truck, Zap } from "lucide-react";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import heroHome from "@/assets/hero-home.jpg";
import roadService from "@/assets/service-road.jpg";
import earthworkService from "@/assets/service-earthwork.jpg";
import materialService from "@/assets/service-material.jpg";
import miningService from "@/assets/service-mining.jpg";
import powerplantService from "@/assets/service-powerplant.jpg";
import React from "react";

const services = [
  {
    title: "Road Construction",
    description: "Professional highway and road building services with modern equipment and techniques. We specialize in all types of road construction including highways, expressways, and local roads. Our team ensures smooth execution from planning to completion.",
    icon: Building,
    image: roadService,
    features: [
      "Highway Construction",
      "Expressway Development",
      "Rural & Urban Roads",
      "Road Widening & Upgrades",
      "Quality Asphalt Laying",
      "Professional Finishing",
    ],
  },
  {
    title: "Earth Work",
    description: "Expert excavation, grading, and land preparation services for construction projects. We handle all types of earthwork including site preparation, grading, compaction, and excavation with precision and efficiency.",
    icon: Mountain,
    image: earthworkService,
    features: [
      "Site Excavation",
      "Grading & Leveling",
      "Land Compaction",
      "Foundation Preparation",
      "Soil Stabilization",
      "Drainage Solutions",
    ],
  },
  {
    title: "Material Supply",
    description: "Quality construction materials delivered on time to your project site. We supply a wide range of construction materials including aggregates, sand, gravel, and more. All materials meet industry standards.",
    icon: Package,
    image: materialService,
    features: [
      "Sand & Aggregates",
      "Gravel Supply",
      "Stone & Boulders",
      "Quality Certified Materials",
      "Timely Delivery",
      "Bulk Supply Options",
    ],
  },
  {
    title: "Mining Operations",
    description: "Specialized mining operations with heavy equipment and skilled workforce. We provide comprehensive mining services including overburden removal, coal handling, and mineral extraction with focus on safety and efficiency.",
    icon: Truck,
    image: miningService,
    features: [
      "Overburden Removal",
      "Coal Handling",
      "Mineral Extraction",
      "Mine Development",
      "Safety Compliance",
      "Environmental Management",
    ],
  },
  {
    title: "Power Plant Projects",
    description: "Infrastructure development for energy sector with precision and safety. We specialize in civil works for thermal and renewable power plants, including foundation work, structural construction, and site development.",
    icon: Zap,
    image: powerplantService,
    features: [
      "Civil Works",
      "Foundation Construction",
      "Structural Development",
      "Site Preparation",
      "Equipment Installation Support",
      "Maintenance Services",
    ],
  },
];

const Services = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroHome}
        title="Our Expertise"
        subtitle="Delivering Quality Infrastructure Solutions"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Comprehensive Infrastructure Services</h2>
            <p className="text-lg text-muted-foreground">
              With over 9 years of experience and cutting-edge equipment, we deliver excellence 
              across all our service offerings.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-96 overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                      <div className="absolute top-8 left-8">
                        <service.icon className="h-16 w-16 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a consultation and let us help you build your vision.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;