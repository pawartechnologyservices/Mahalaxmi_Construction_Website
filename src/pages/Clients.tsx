import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/Marquee";
import heroHome from "@/assets/hero-home.jpg";

const clients = [
  {
    name: "Larsen & Toubro (L&T)",
    category: "Engineering & Construction",
    projects: "Multiple infrastructure projects",
  },
  {
    name: "Appco Infrastructure Pvt Ltd",
    category: "Highway Development",
    projects: "Samruddhi Mahamarg Project",
  },
  {
    name: "NTPC Ramagundam",
    category: "Power Generation",
    projects: "Plant infrastructure development",
  },
  {
    name: "Mahanandi Coal Mines (MCL)",
    category: "Coal Mining",
    projects: "OB Removal & Earth Work",
  },
  {
    name: "Domngamova Mines",
    category: "Mining Operations",
    projects: "Mining infrastructure",
  },
  {
    name: "Balajee Construction",
    category: "Construction",
    projects: "Dozing & Earth Work",
  },
  {
    name: "Northern Coalfields Ltd (NCL)",
    category: "Coal Mining",
    projects: "Grading & Compaction Work",
  },
  {
    name: "NTPC Corba",
    category: "Power Generation",
    projects: "Civil works & infrastructure",
  },
  {
    name: "JSW Panvel",
    category: "Steel Manufacturing",
    projects: "Industrial infrastructure",
  },
  {
    name: "Triveni Mining",
    category: "Mining Operations",
    projects: "Mining support services",
  },
  {
    name: "Upadhyey Construction",
    category: "Construction",
    projects: "Infrastructure projects",
  },
  {
    name: "Bhilai Steel Plant",
    category: "Steel Manufacturing",
    projects: "Coal handling plant",
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
                className="min-w-[300px] p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-center">{client.name}</h3>
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
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{client.category}</p>
                  <p className="text-sm text-muted-foreground">{client.projects}</p>
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
