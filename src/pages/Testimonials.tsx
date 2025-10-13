import { motion } from "framer-motion";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

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

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      <Banner
        image={heroHome}
        title="Our Clients Speak for Us"
        subtitle="Real Experiences from Real Clients"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Hear what our clients have to say about 
              their experience working with Mahalaxmi Infrasolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full relative hover:shadow-lg transition-shadow">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-2xl">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Project */}
                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-primary font-semibold">
                      Project: {testimonial.project}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Client Satisfaction Metrics
          </motion.h2>

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
              >
                <Card className="p-8 text-center">
                  <p className="text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing list of satisfied clients and experience quality 
              infrastructure development.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Your Project Today
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
