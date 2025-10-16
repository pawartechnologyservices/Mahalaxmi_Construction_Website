import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroProjects from "@/assets/hero-projects.jpg";
import { useEffect } from "react";

const completedProjects = [
  {
    year: "2016",
    project: "OB Removal Work",
    client: "Mahanandi Coal Ltd (MCL)",
    value: "₹50 Lakhs",
    status: "Completed",
  },
  {
    year: "2017",
    project: "Coal Handling Plant",
    client: "Bhilai Steel Plant",
    value: "₹35 Lakhs",
    status: "Completed",
  },
  {
    year: "2017",
    project: "Grading & Compaction Work",
    client: "Northern Coalfields Ltd (NCL)",
    value: "₹45 Lakhs",
    status: "Completed",
  },
  {
    year: "2017-18",
    project: "Dozing Work",
    client: "Balajee Construction",
    value: "₹45 Lakhs",
    status: "Completed",
  },
  {
    year: "2018-19",
    project: "Earth Work & Excavation",
    client: "Mahanandi Coal Ltd (MCL)",
    value: "₹50 Lakhs",
    status: "Completed",
  },
];

const currentProject = {
  name: "Samruddhi Mahamarg Project",
  client: "Appco Infrastructure Pvt Ltd",
  description: "Major highway construction project for Maharashtra's prestigious Samruddhi Mahamarg (Mumbai-Nagpur Expressway). This flagship project involves extensive earth work, road construction, and infrastructure development.",
  scope: [
    "Highway Construction",
    "Earth Work & Grading",
    "Material Supply",
    "Quality Control",
  ],
  status: "In Progress",
};

const Projects = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroProjects}
        title="Our Projects"
        subtitle="Milestones of Excellence in Infrastructure Development"
      />

      {/* Current Project */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <Badge className="mb-4 text-lg px-4 py-2">Current Project</Badge>
              <h2 className="text-4xl font-bold mb-6">{currentProject.name}</h2>
            </div>

            <Card className="overflow-hidden">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Client:</strong> {currentProject.client}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Project Scope:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentProject.scope.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 bg-muted p-3 rounded-lg"
                      >
                        <span className="text-primary font-bold">✓</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                  <Badge variant="default" className="text-lg px-6 py-2">
                    {currentProject.status}
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Completed Projects
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold">Year</th>
                      <th className="text-left py-4 px-6 font-semibold">Project Name</th>
                      <th className="text-left py-4 px-6 font-semibold">Client</th>
                      <th className="text-right py-4 px-6 font-semibold">Value</th>
                      <th className="text-center py-4 px-6 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedProjects.map((project, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4 px-6 font-semibold">{project.year}</td>
                        <td className="py-4 px-6">{project.project}</td>
                        <td className="py-4 px-6 text-muted-foreground">{project.client}</td>
                        <td className="py-4 px-6 text-right font-semibold text-primary">
                          {project.value}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <Badge variant="secondary">{project.status}</Badge>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Project Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "6+", label: "Major Projects Completed" },
              { number: "₹2.25 Cr+", label: "Total Project Value" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-44">
                  <p className="text-5xl font-bold gradient-text mb-2">{stat.number}</p>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;