import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  const year = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mdisrar32", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/mdisrarA32", label: "GitHub" },
    { icon: <FaEnvelope />, href: "mailto:israrmd0734@gmail.com", label: "Email" }
  ]
  
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" }
  ]
  
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Md Israr</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Engineer passionate about creating efficient solutions through programming.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 text-xl transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+919540570568" 
                  className="hover:text-primary-400 transition-colors"
                >
                  +91-9540570568
                </a>
              </li>
              <li>
                <a 
                  href="mailto:israrmd0734@gmail.com" 
                  className="hover:text-primary-400 transition-colors"
                >
                  israrmd0734@gmail.com
                </a>
              </li>
              <li>Phagwara, Punjab, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p className="flex items-center justify-center">
            © {year} Md Israr. All rights reserved. Made with 
            <motion.span 
              className="text-red-500 mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                repeatType: "loop"
              }}
            >
              <FaHeart />
            </motion.span>
            using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer