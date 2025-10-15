import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/Marquee";
import heroHome from "@/assets/hero-home.jpg";
import clientLT from "@/assets/client-lt.jpg";
import clientAppco from "@/assets/client-appco.jpg";
import clientNTPC from "@/assets/client-ntpc.jpg";
import clientJSW from "@/assets/client-jsw.jpg";
import clientBalajee from "@/assets/client-balajee.jpg";
import clientNCL from "@/assets/client-ncl.jpg";
import clientMahanandi from "@/assets/client-mahanandi.jpg";

const clients = [
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

const Clients = () => {
  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroHome}
        title="Our Trusted Partners & Clients"
        subtitle="Building Long-Term Relationships Through Quality and Reliability"
      />

      {/* Client Marquee */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Working with Industry Leaders
          </motion.h2>

          <Marquee speed={30}>
            {clients.map((client, index) => (
              <Card
                key={index}
                className="min-w-[350px] glass-card border-2 border-primary/20 p-8 hover:scale-105 hover:shadow-glow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-background to-muted">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-40 object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-center group-hover:text-primary transition-colors">{client.name}</h3>
                <div className="h-1 w-0 bg-gradient-primary mx-auto mt-4 group-hover:w-full transition-all duration-500 rounded-full" />
              </Card>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Detailed Client List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Esteemed Clients
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
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

      {/* Client Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Industries We Serve
          </motion.h2>

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
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-3">{industry.icon}</div>
                  <p className="font-semibold">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Clients Trust Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Quality Assured", desc: "ISO standard processes" },
              { title: "On-Time Delivery", desc: "100% project completion rate" },
              { title: "Expert Team", desc: "30+ skilled professionals" },
              { title: "Modern Equipment", desc: "Latest machinery & technology" },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
