import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
import profile from '../assets/profile.jpg'; // Path to your profile image

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Md Israr</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            Computer Science Engineer
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
            Passionate about web development, data structures, and creating efficient solutions 
            with expertise in React, C++, and JavaScript.
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start mb-8">
            <motion.a 
              href="https://www.linkedin.com/in/mdisrar32" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/mdisrarA32" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="mailto:israrmd0734@gmail.com" 
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </div>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
  className="md:w-1/3 mt-10 md:mt-0"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <div className="relative">
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-74 h-70 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl transition-all"
    >
      <img 
        src={profile} 
        alt="Your Name" 
        className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </motion.div>
  </div>
</motion.div>

      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
