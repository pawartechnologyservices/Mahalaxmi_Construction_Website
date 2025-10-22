import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import manager from "@/assets/manager.png";
import civil from "@/assets/civilengineer.png";
import site from "@/assets/siteengineer.png";
import architect from "@/assets/architect.png";
import safety from "@/assets/safetymanager.png";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager",
    image: manager,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Anita Sharma",
    role: "Civil Engineer",
    image: civil,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Vikram Patel",
    role: "Site Supervisor",
    image: site,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Pooja Singh",
    role: "Architect",
    image: architect,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Rohit Verma",
    role: "Safety Officer",
    image: safety,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
];

export const Team = () => {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-20 md:pt-28 pb-16 md:pb-20 min-h-screen px-4 sm:px-6">
      {/* Page Heading */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-black/70 px-4"
        >
          Our dedicated team of engineers, architects, and builders work
          tirelessly to turn visions into solid foundations and world-class
          structures.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-6 h-auto min-h-[500px] md:h-[600px]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-64 sm:h-72 md:h-80"
          >
            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover transition-all duration-700 ease-in-out group-hover:object-contain group-hover:rounded-none group-hover:w-full group-hover:h-full group-hover:scale-110"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-xs md:text-sm mb-3 md:mb-4">{member.role}</p>
              <div className="flex space-x-4 md:space-x-5">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Animation */}
      <motion.div
        className="text-center mt-12 md:mt-32 -mb-10 text-lg md:text-xl text-black/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Building dreams, one brick at a time. 🏗️
      </motion.div>
    </section>
  );
};

export default Team;
