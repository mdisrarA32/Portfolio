import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaCode } from 'react-icons/fa'

const ProjectCard = ({ title, period, technologies, description, points, image, reverse = false, github, live }) => {
  return (
    <motion.div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-2/5 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="md:w-3/5 p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
          <div className="flex items-center text-primary-600 dark:text-primary-400">
            <FaCalendarAlt className="mr-1 text-sm" />
            <span className="text-sm">{period}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-md flex items-center"
            >
              <FaCode className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <ul className="mb-6 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 flex">
              <div className="text-primary-500 mr-2 mt-1">•</div>
              {point}
            </li>
          ))}
        </ul>
        
        <div className="flex space-x-4">
          <motion.a 
            href={live || '#'} 
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank" rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2" />
            <span>Live Demo</span>
          </motion.a>
          
          <motion.a 
            href={github || '#'} 
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank" rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
            <span>Source Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div ref={ref}>
          <ProjectCard 
            title="Ansari Crane Service"
            period="Mar 2025 (In Development)"
            technologies={["React.js", "Node.js", "Express.js", "MongoDB"]}
            description="A web-based platform for seamless crane rental management with real-time booking and secure payment functionality."
            points={[
              "Developed a responsive and intuitive user interface using React.js, enhancing user experience and navigation flow.",
              "Implemented a scalable backend using Node.js and Express.js, and integrated MongoDB for efficient data handling and retrieval.",
              "Designed and built an admin dashboard for managing crane inventory, customer bookings, and inquiries.",
              "Ensured end-to-end integration and optimized performance across the full stack."
            ]}
            image="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            github="https://github.com/IsrarAnsari12/ansari-crane-service"
          />
          
          <ProjectCard 
            title="Random Guess Number"
            period="July 2024"
            technologies={["C++", "DSA"]}
            description="An interactive number guessing game developed during summer training at Cipher School, designed to enhance logical thinking and user engagement."
            points={[
              "Implemented random number generation and robust user input handling for smooth gameplay.",
              "Integrated multiple difficulty levels (Easy, Medium, Hard) to accommodate various player skill levels.",
              "Built a hint system and attempt tracking mechanism to improve user experience and replay value.",
              "Designed a statistics module to display player performance, including total games played, wins, and losses."
            ]}
            image="https://images.pexels.com/photos/5723597/pexels-photo-5723597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            reverse={true}
            github="https://github.com/mdisrarA32/Random-number-game"
          />
          
          <ProjectCard 
            title="Project To-Do List"
            period="June 2024"
            technologies={["C++", "DSA"]}
            description="A command-line application in C++ for efficient project task management, enabling users to add, update, delete, and track tasks."
            points={[
              "Implemented task attributes including name, description, priority, deadline, and completion status for comprehensive task management.",
              "Designed functionalities to view tasks in an organized format and update task details dynamically.",
              "Added options to delete completed or unnecessary tasks and mark tasks as completed.",
              "Utilized file handling techniques to enable persistent task saving and loading, allowing history tracking and future reference.",
              "Applied clean code practices and modular design to ensure maintainability and scalability of the application."
            ]}
            image="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            github="https://github.com/mdisrarA32/To-Do-list"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
