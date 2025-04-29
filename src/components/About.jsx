import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import cv from '../assets/Normal CV (2).pdf'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = cv
    link.download = 'Md-Israr-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              Computer Science Engineer
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I am Md Israr, a computer science engineer passionate about creating efficient solutions
              through programming. With a strong foundation in C++, JavaScript, and various web technologies,
              I specialize in developing responsive and interactive web applications.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              My journey in technology began during my bachelor's studies at Lovely Professional University,
              where I developed a solid understanding of data structures, algorithms, and software development principles.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm constantly expanding my knowledge through projects and training programs, most recently
              completing a summer training at Cipher School where I enhanced my C++ and data structure skills.
            </motion.p>

            <motion.button
              onClick={handleDownloadCV}
              className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.button>

            <motion.a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 dark:text-primary-400 hover:underline text-sm"
              variants={itemVariants}
            >
              <FaExternalLinkAlt className="mr-2" />
              View CV
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Personal Information</h4>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary-500 mr-4 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-800 dark:text-gray-200">+91-9540570568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-500 mr-4 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:israrmd0734@gmail.com"
                      className="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      israrmd0734@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-500 mr-4 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/mdisrar32"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-50 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-gray-700 p-4 rounded-md text-center transition-colors duration-300"
              >
                <h5 className="text-lg font-medium text-primary-600 dark:text-primary-400">LinkedIn</h5>
                <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
              </a>

              <a
                href="https://github.com/mdisrarA32"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded-md text-center transition-colors duration-300"
              >
                <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200">GitHub</h5>
                <p className="text-gray-600 dark:text-gray-400">View my code</p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
