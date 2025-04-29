import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const EducationItem = ({ title, institution, location, period, percentage, degree, className }) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="absolute top-6 right-6 text-primary-500 text-3xl">
        <FaGraduationCap />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 pr-12">{institution}</h3>
      <p className="text-primary-600 dark:text-primary-400 mb-4">{title}</p>
      
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
        <FaCalendarAlt className="mr-2" /> {period}
      </div>
      
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
        <FaMapMarkerAlt className="mr-2" /> {location}
      </div>
      
      {degree && <p className="text-gray-600 dark:text-gray-400 mb-2">{degree}</p>}
      {percentage && <p className="text-gray-600 dark:text-gray-400">Percentage/CGPA: {percentage}</p>}
    </motion.div>
  )
}

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div 
          ref={ref} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <EducationItem 
            title="Bachelor of Technology"
            institution="Lovely Professional University"
            location="Phagwara, Punjab"
            period="Aug 2022 - Present"
            percentage="CGPA: 6.95"
            degree="Computer Science and Engineering"
          />
          
          <EducationItem 
            title="Intermediate (PCM)"
            institution="Laxmi Narayan Dubey College"
            location="East Champaran, Bihar"
            period="Apr 2019 - Mar 2021"
            percentage="Percentage: 79%"
          />
          
          <EducationItem 
            title="Matriculation"
            institution="Happy Model Sr. Sec. School"
            location="Gurugram, Haryana"
            period="Apr 2018 - Mar 2019"
            percentage="Percentage: 82%"
          />
        </div>
      </div>
    </section>
  )
}

export default Education