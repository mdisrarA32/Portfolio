import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'

const CertificateCard = ({ title, issuer, date, link }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex">
        <div className="text-primary-500 text-3xl mr-4">
          <FaCertificate />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{issuer}</p>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            <FaCalendarAlt className="mr-2" />
            <span>{date}</span>
          </div>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <span className="mr-1">View Certificate</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const certificates = [
    {
      title: "Data Structure using C++ training Certificates",
      issuer: "CipherSchool",
      date: "Aug 2024",
      link: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65d21"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "Nov 2023",
      link: "https://coursera.org/share/a0439623a91b2afe199367c614786e7e"
    },
    {
      title: "Programming in C++",
      issuer: "Coursera",
      date: "Oct 2023",
      link: "https://coursera.org/share/80d534e457cc63e03b3e1391dc0f2bad"
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      date: "Mar 2023",
      link: "https://coursera.org/share/08fcfec94cd285af9bfe4946f376d87e"
    }
  ]
  
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>
        
        <div 
          ref={ref} 
          className="grid md:grid-cols-2 gap-6"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              title={certificate.title}
              issuer={certificate.issuer}
              date={certificate.date}
              link={certificate.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates