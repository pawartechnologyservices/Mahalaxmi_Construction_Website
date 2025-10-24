import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Award, Zap, Shield, Users, TrendingUp, Heart, Globe } from "lucide-react";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import heroAbout from "@/assets/hero-about.jpg";
import visionImage from "@/assets/vision-image.jpg";
import missionImage from "@/assets/mission-image.jpg";
import qualityImage from "@/assets/quality-image.jpg";
import innovationImage from "@/assets/innovation-image.jpg";
import teamImage from "@/assets/team-image.jpg";
import safetyImage from "@/assets/safety-image.jpg";
import tracker from "@/assets/monthlytracker.png";
import satisfaction from "@/assets/clientsatisfy.png";
import React from "react";

const coreBeliefs = [
  {
    title: "Latest Equipment & Machinery",
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    image: innovationImage
  },
  {
    title: "Quality Control at Every Stage",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-50",
    image: qualityImage
  },
  {
    title: "Skilled & Experienced Workforce",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    image: teamImage
  },
  {
    title: "Monthly Milestone Tracking",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    image: tracker
  },
  {
    title: "Safety First Approach",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-50",
    image: safetyImage
  },
  {
    title: "100% Client Satisfaction",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    image: satisfaction
  },
];

const qualityProcess = [
  {
    step: "1",
    title: "Latest Equipment",
    description: "State-of-the-art machinery for efficient execution",
    icon: Zap,
  },
  {
    step: "2",
    title: "Quality Control",
    description: "Rigorous quality checks at every project phase",
    icon: Shield,
  },
  {
    step: "3",
    title: "Skilled Workforce",
    description: "Expert team with years of industry experience",
    icon: Users,
  },
  {
    step: "4",
    title: "Milestone Tracking",
    description: "Regular monitoring and progress reporting",
    icon: TrendingUp,
  },
];

const About = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Who We Are
              </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={visionImage} 
                    alt="Our Vision" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading infrastructure development company in India, known for quality, 
                    reliability, and innovation. We envision a future where our projects contribute 
                    significantly to the nation's growth and development.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={missionImage} 
                    alt="Our Mission" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional infrastructure solutions through cutting-edge technology, 
                    skilled workforce, and unwavering commitment to quality. We strive to exceed client 
                    expectations while maintaining the highest standards of safety and sustainability.
                  </p>
                </div>
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
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            Our Core Beliefs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            The fundamental principles that guide our every project and decision
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={belief.image} 
                      alt={belief.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-full ${belief.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <belief.icon className={`h-7 w-7 ${belief.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {belief.title}
                        </h3>
                        <div className="w-12 h-1 bg-primary rounded-full mb-3"></div>
                      </div>
                    </div>
                  </div>
                </Card>
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
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            Quality Assurance Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Our systematic approach to delivering excellence in every project
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Card className="p-6 text-center h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <process.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{process.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
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
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            Organization Structure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Meet the leadership team driving our success
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={teamImage} 
                  alt="Leadership Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                  <h3 className="text-3xl font-bold text-center">Leadership Team</h3>
                  <p className="text-center opacity-90 mt-2">Guiding Excellence in Infrastructure</p>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 bg-muted/50 rounded-lg">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-2xl font-bold text-foreground">Mr. Nikhil A. Budde</p>
                    <p className="text-lg text-muted-foreground font-medium">Proprietor</p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Visionary leader with extensive experience in infrastructure development, 
                      driving innovation and excellence across all projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 bg-muted/50 rounded-lg">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-2xl font-bold text-foreground">Mr. Siddesh S. Budde</p>
                    <p className="text-lg text-muted-foreground font-medium">Authorized Person</p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Operations head ensuring quality and timely project delivery with 
                      meticulous planning and execution.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl">
              <div className="relative h-0 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={safetyImage} 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <Globe className="h-16 w-16 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-2xl font-bold mb-4">Our Growing Team</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">30+</p>
                  <p className="text-muted-foreground">Skilled Professionals</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">9+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-6">
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