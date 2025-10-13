import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Award } from "lucide-react";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import heroAbout from "@/assets/hero-about.jpg";

const coreBeliefs = [
  "Latest Equipment & Machinery",
  "Quality Control at Every Stage",
  "Skilled & Experienced Workforce",
  "Monthly Milestone Tracking",
  "Safety First Approach",
  "100% Client Satisfaction",
];

const qualityProcess = [
  {
    step: "1",
    title: "Latest Equipment",
    description: "State-of-the-art machinery for efficient execution",
  },
  {
    step: "2",
    title: "Quality Control",
    description: "Rigorous quality checks at every project phase",
  },
  {
    step: "3",
    title: "Skilled Workforce",
    description: "Expert team with years of industry experience",
  },
  {
    step: "4",
    title: "Milestone Tracking",
    description: "Regular monitoring and progress reporting",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroAbout}
        title="About Mahalaxmi Infrasolution"
        subtitle="Building Infrastructure for Tomorrow"
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2016, Mahalaxmi Infrasolution has grown to become a trusted name in 
                infrastructure development. Founded by Mr. Nikhil Ananda Budde, our company specializes 
                in road construction, earth work, material supply, mining, and power plant projects. With 
                over 9 years of experience and a team of 30+ skilled professionals, we have successfully 
                completed numerous projects for major clients including L&T, NTPC, JSW, and Appco.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading infrastructure development company in India, known for quality, 
                  reliability, and innovation. We envision a future where our projects contribute 
                  significantly to the nation's growth and development.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional infrastructure solutions through cutting-edge technology, 
                  skilled workforce, and unwavering commitment to quality. We strive to exceed client 
                  expectations while maintaining the highest standards of safety and sustainability.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Core Beliefs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{belief}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Quality Assurance Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Organization Structure
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold text-center">Leadership Team</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <Award className="h-12 w-12 text-primary" />
                  <div>
                    <p className="text-xl font-bold">Mr. Nikhil A. Budde</p>
                    <p className="text-muted-foreground">Proprietor</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Visionary leader with extensive experience in infrastructure development
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-12 w-12 text-primary" />
                  <div>
                    <p className="text-xl font-bold">Mr. Siddesh S. Budde</p>
                    <p className="text-muted-foreground">Authorized Person</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Operations head ensuring quality and timely project delivery
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                <strong>Team Size:</strong> 30+ Skilled Professionals
              </p>
              <p className="text-muted-foreground mt-2">
                Including Engineers, Operators, Supervisors, and Support Staff
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
