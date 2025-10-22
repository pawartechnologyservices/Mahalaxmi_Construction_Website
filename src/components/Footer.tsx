import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import mclogo from "@/assets/mahalogo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <img src={mclogo} alt="" className="-ml-24 -mt-9"/>
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Developing Infra for a Better Tomorrow
            </p>
            <p className="text-sm opacity-80">
              Since 2016 | 9+ Years of Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary mt-8">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm opacity-80 hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/projects" className="block text-sm opacity-80 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary mt-9">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm opacity-80">Kolhapur, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919970894756" className="text-sm opacity-80 hover:text-primary transition-colors">
                  +91 7391074444
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:nikb7535@gmail.com" className="text-sm opacity-80 hover:text-primary transition-colors">
                  Mahalaxmiinfrasolutions7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© 2025 Mahalaxmi Infrasolution. All rights reserved.</p>
          <p className="mt-2">PAN: DRSPB5659E | GST: 27DRSPB5659E1ZF</p>
        </div>
      </div>
    </footer>
  );
};
