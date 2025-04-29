import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactInfo = ({ icon, title, content, link = null }) => {
  return (
    <motion.div 
      className="flex items-start mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-primary-500 text-2xl mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-gray-200">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target={link.includes('http') ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{content}</p>
        )}
      </div>
    </motion.div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div ref={ref} className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me for any inquiries, collaboration opportunities, 
              or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="mb-8">
              <ContactInfo 
                icon={<FaPhone />}
                title="Phone"
                content="+91-9540570568"
                link="tel:+919540570568"
              />
              
              <ContactInfo 
                icon={<FaEnvelope />}
                title="Email"
                content="israrmd0734@gmail.com"
                link="mailto:israrmd0734@gmail.com"
              />
              
              <ContactInfo 
                icon={<FaMapMarkerAlt />}
                title="Location"
                content="Phagwara, Punjab, India"
              />
              
              <ContactInfo 
                icon={<FaLinkedin />}
                title="LinkedIn"
                content="linkedin.com/in/mdisrar32"
                link="https://www.linkedin.com/in/mdisrar32"
              />
              
              <ContactInfo 
                icon={<FaGithub />}
                title="GitHub"
                content="github.com/mdisrarA32"
                link="https://github.com/mdisrarA32"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Send Message</h3>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-green-700 dark:text-green-400">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full btn btn-primary py-3"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact