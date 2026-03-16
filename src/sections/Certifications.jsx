import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

import AnimatedSection from '../components/AnimatedSection'

const certifications = [
  {
    title: 'Cloud computing ',
    issuer: 'NEPTL',
    date: 'APRIL 2024',
    emoji: '☁️',
    color: '#FF9900',
    verify: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S143730122204229154',
    tags: ['Cloud'],
  },
  {
    title: 'Web Responsive Design',
    issuer: 'Freecodecamp',
    date: 'Oct 2023',
    emoji: '🐍',
    color: '#0081FB',
    verify: 'https://www.freecodecamp.org/certification/fcc16f2f21c-ebd7-4d09-906d-a0abac4400b9/responsive-web-design',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Peer-to-Peer Protocols',
    issuer: 'Coursera',
    date: 'Oct 2024',
    emoji: '🤖',
    color: '#0056D2',
    verify: 'https://www.coursera.org/account/accomplishments/verify/431X9KY386ZY',
    tags: ['P2P', 'Networking', 'Python'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: 'rgba(10, 15, 46, 0.4)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">04. Certifications</span>
          </div>
          <h2 className="section-title">Certifications & Courses</h2>
          <p className="section-subtitle">Recognized credentials validating my continuous learning journey</p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glow-card"
              style={{ padding: 24 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${cert.color}20`,
                  border: `1px solid ${cert.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', flexShrink: 0,
                }}>
                  {cert.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 4, lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{cert.issuer}</p>
                </div>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div style={{
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  borderRadius: 8, padding: '8px 12px',
                  marginBottom: 14, display: 'flex', gap: 8, alignItems: 'center'
                }}>
                  <FaCheckCircle style={{ color: '#10b981', fontSize: '0.8rem', flexShrink: 0 }} />
                  <span style={{ color: '#6366f1', fontSize: '0.72rem', fontFamily: 'Fira Code, monospace' }}>
                    {cert.credentialId}
                  </span>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {cert.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 6,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    fontSize: '0.72rem', color: '#6366f1', fontFamily: 'Fira Code, monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#475569', fontSize: '0.8rem' }}>{cert.date}</span>
                <a href={cert.verify} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', gap: 6, alignItems: 'center',
                  color: '#94a3b8', fontSize: '0.8rem', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} /> Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
