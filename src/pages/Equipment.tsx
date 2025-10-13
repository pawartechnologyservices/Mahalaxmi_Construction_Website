import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import heroEquipment from "@/assets/hero-equipment.jpg";

const equipment = [
  { name: "Ripper Dozer", quantity: 3, description: "Heavy-duty dozers for ripping and land clearing" },
  { name: "JCB", quantity: 2, description: "Versatile backhoe loaders for excavation and loading" },
  { name: "Excavator", quantity: 3, description: "Powerful excavators for deep excavation work" },
  { name: "Dozer", quantity: 3, description: "Bulldozers for pushing and leveling operations" },
  { name: "Motor Grader", quantity: 2, description: "Precision grading equipment for road construction" },
  { name: "Vibratory Power Roller", quantity: 2, description: "Compaction rollers for soil and asphalt" },
  { name: "Dumpers / Tippers", quantity: 5, description: "Heavy-duty trucks for material transportation" },
  { name: "Light Vehicles", quantity: 3, description: "Support vehicles for site operations" },
];

const Equipment = () => {
  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroEquipment}
        title="Our Machinery & Equipment"
        subtitle="Powering Every Project with State-of-the-Art Technology"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">World-Class Equipment Fleet</h2>
            <p className="text-lg text-muted-foreground">
              Our extensive fleet of modern machinery ensures efficient project execution 
              with the highest standards of quality and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-lg">
                      {item.quantity}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Summary */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground text-center">
                <h3 className="text-3xl font-bold">Equipment Summary</h3>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-semibold">Equipment Type</th>
                        <th className="text-center py-4 px-4 font-semibold">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipment.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                        >
                          <td className="py-4 px-4">{item.name}</td>
                          <td className="text-center py-4 px-4 font-bold text-primary">{item.quantity}</td>
                        </motion.tr>
                      ))}
                      <tr className="bg-primary/10">
                        <td className="py-4 px-4 font-bold">Total Equipment Units</td>
                        <td className="text-center py-4 px-4 font-bold text-primary text-xl">
                          {equipment.reduce((sum, item) => sum + item.quantity, 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Equipment Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose Our Equipment?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Latest Models", desc: "Modern, well-maintained machinery" },
              { title: "Expert Operators", desc: "Skilled professionals for each equipment" },
              { title: "Regular Maintenance", desc: "Zero downtime, maximum efficiency" },
              { title: "Safety Certified", desc: "All equipment meets safety standards" },
            ].map((feature, index) => (
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
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
