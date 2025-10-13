import { motion, AnimatePresence } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import heroEquipment from "@/assets/hero-equipment.jpg";
import ripperDozerImg from "@/assets/equipment-ripper-dozer.jpg";
import jcbImg from "@/assets/equipment-jcb.jpg";
import excavatorImg from "@/assets/equipment-excavator.jpg";
import dozerImg from "@/assets/equipment-dozer.jpg";
import motorGraderImg from "@/assets/equipment-motor-grader.jpg";
import rollerImg from "@/assets/equipment-roller.jpg";
import dumperImg from "@/assets/equipment-dumper.jpg";
import lightVehiclesImg from "@/assets/equipment-light-vehicles.jpg";

const equipment = [
  { name: "Ripper Dozer", quantity: 3, description: "Heavy-duty dozers for ripping and land clearing", image: ripperDozerImg },
  { name: "JCB", quantity: 2, description: "Versatile backhoe loaders for excavation and loading", image: jcbImg },
  { name: "Excavator", quantity: 3, description: "Powerful excavators for deep excavation work", image: excavatorImg },
  { name: "Dozer", quantity: 3, description: "Bulldozers for pushing and leveling operations", image: dozerImg },
  { name: "Motor Grader", quantity: 2, description: "Precision grading equipment for road construction", image: motorGraderImg },
  { name: "Vibratory Power Roller", quantity: 2, description: "Compaction rollers for soil and asphalt", image: rollerImg },
  { name: "Dumpers / Tippers", quantity: 5, description: "Heavy-duty trucks for material transportation", image: dumperImg },
  { name: "Light Vehicles", quantity: 3, description: "Support vehicles for site operations", image: lightVehiclesImg },
];

const EquipmentCard = ({ item, index }: { item: typeof equipment[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card className="overflow-hidden h-full relative border-2 border-border hover:border-primary/50 transition-all duration-300">
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            animate={{
              scale: isHovered ? 1 : 0.95,
            }}
          />
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 240, scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-[240px] object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-primary/20"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="p-6 relative z-10">
            <div className="flex items-start justify-between mb-4">
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
                animate={{
                  x: isHovered ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.h3>
              
              <motion.div 
                className="relative"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {item.quantity}
                </div>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              {item.description}
            </motion.p>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </Card>
      </motion.div>
      
      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-primary/5 blur-2xl rounded-lg"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

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
              <EquipmentCard key={index} item={item} index={index} />
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
