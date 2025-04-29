import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaCalendarAlt, FaBuilding } from 'react-icons/fa'

const Training = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
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
  
  return (
    <section id="training" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Training
        </motion.h2>
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="bg-primary-500 p-4 text-white flex items-center">
              <FaCode className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Summer Training - Cipher School</h3>
                <div className="flex items-center mt-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>June - July 2024</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <FaBuilding className="text-primary-500 mr-3" />
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Program Overview</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An intensive summer training program focused on C++ programming, data structures, algorithms, 
                  and object-oriented programming concepts. The training included both theoretical knowledge and 
                  practical implementation through hands-on projects.
                </p>
              </motion.div>
              
              <motion.div className="mb-8" variants={itemVariants}>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Key Learning Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="text-primary-500 mr-3 mt-1">•</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gained hands-on experience in C++, focusing on data structures, algorithms, and OOP concepts.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="text-primary-500 mr-3 mt-1">•</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built mini projects like a Number Guessing Game and Task Manager to apply core programming skills.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="text-primary-500 mr-3 mt-1">•</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implemented user input handling, file management, and modular code design.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="text-primary-500 mr-3 mt-1">•</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Improved problem-solving, logic building, and clean coding practices in a collaborative, 
                      project-based environment.
                    </p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">C++ Programming</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Data Structures</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Algorithms</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Object-Oriented Programming</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Problem Solving</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">File Handling</span>
                  <span className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Code Optimization</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Training