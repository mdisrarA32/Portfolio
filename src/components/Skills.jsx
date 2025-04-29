import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaTools, FaLaptopCode, FaUsers } from 'react-icons/fa'

const SkillBar = ({ name, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const SkillCard = ({ icon, title, skills }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center">
            <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const languages = [
    { name: "C++", percentage: 90, color: "bg-primary-500" },
    { name: "JavaScript", percentage: 85, color: "bg-primary-600" },
    { name: "HTML", percentage: 95, color: "bg-primary-500" },
    { name: "CSS", percentage: 90, color: "bg-primary-600" }
  ]
  
  const frameworks = [
    { name: "React.js", percentage: 85, color: "bg-secondary-500" },
    { name: "Bootstrap", percentage: 90, color: "bg-secondary-600" },
    { name: "Node.js", percentage: 75, color: "bg-secondary-500" },
    { name: "Express.js", percentage: 70, color: "bg-secondary-600" }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <div ref={ref} className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Programming Languages</h3>
              {languages.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Frameworks & Libraries</h3>
              {frameworks.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <SkillCard
            icon={<FaCode />}
            title="Languages"
            skills={["C++", "JavaScript", "HTML", "CSS", "SQL"]}
          />
          
          <SkillCard
            icon={<FaLaptopCode />}
            title="Frameworks"
            skills={["React.js", "Node.js", "Express.js", "Bootstrap"]}
          />
          
          <SkillCard
            icon={<FaTools />}
            title="Tools & Platforms"
            skills={["VS Code", "Git & GitHub", "MongoDB", "MySQL"]}
          />
          
          <SkillCard
            icon={<FaUsers />}
            title="Soft Skills"
            skills={["Leadership", "Problem-Solving", "Team Player", "Communication", "Project Management"]}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills