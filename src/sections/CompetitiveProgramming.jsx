import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaCode, FaFire, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiHackerrank, SiCodechef } from 'react-icons/si'
import AnimatedSection from '../components/AnimatedSection'

const profiles = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode />,
    handle: '@aman_codes',
    color: '#FFA116',
    stats: [
      { label: 'Problems Solved', value: '580+' },
      { label: 'Contest Rating', value: '1842' },
      { label: 'Global Rank', value: 'Top 8%' },
    ],
    link: 'https://leetcode.com',
  },
  {
    platform: 'Codeforces',
    icon: <SiCodeforces />,
    handle: 'aman_cf',
    color: '#1F8ADE',
    stats: [
      { label: 'Rating', value: '1489' },
      { label: 'Rank', value: 'Specialist' },
      { label: 'Contests', value: '45+' },
    ],
    link: 'https://codeforces.com',
  },
  {
    platform: 'HackerRank',
    icon: <SiHackerrank />,
    handle: 'aman_dev',
    color: '#2EC866',
    stats: [
      { label: 'Stars (Problem Solving)', value: '5⭐' },
      { label: 'Certifications', value: '3' },
      { label: 'Rank', value: 'Gold' },
    ],
    link: 'https://hackerrank.com',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef />,
    handle: 'aman_chef',
    color: '#5B4638',
    stats: [
      { label: 'Rating', value: '1650' },
      { label: 'Stars', value: '3★' },
      { label: 'Division', value: 'Div 2' },
    ],
    link: 'https://codechef.com',
  },
]

const hackathons = [
  {
    name: 'Smart India Hackathon 2024',
    organizer: 'Government of India',
    result: '🥇 National Finalist – Top 50',
    date: 'Aug 2024',
    description: 'Built an AI-powered grievance redressal system for state governments using NLP and real-time dashboards.',
    tags: ['NLP', 'React', 'Python', 'Flask'],
    color: '#f59e0b',
  },
  {
    name: 'HackOn with Amazon',
    organizer: 'Amazon India',
    result: '🥈 Runner-up – Regional Round',
    date: 'Feb 2024',
    description: 'Developed a real-time inventory management system using AWS services with predictive analytics.',
    tags: ['AWS', 'Node.js', 'ML', 'DynamoDB'],
    color: '#FF9900',
  },
  {
    name: 'BeyondHacks 3.0',
    organizer: 'College Technical Fest',
    result: '🏆 Winner – Best Technical Solution',
    date: 'Nov 2023',
    description: 'Created a peer-to-peer learning platform with gamification, adaptive quizzes, and a recommendation engine.',
    tags: ['React', 'Socket.io', 'MongoDB', 'D3.js'],
    color: '#10b981',
  },
]

export default function CompetitiveProgramming() {
  return (
    <section id="competitive" className="section" style={{ background: 'rgba(10, 15, 46, 0.4)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">06. Competitive Programming</span>
          </div>
          <h2 className="section-title">Competitive Programming & Hackathons</h2>
          <p className="section-subtitle">
            Sharpening problem-solving skills one contest at a time
          </p>
        </AnimatedSection>

        {/* CP Profiles */}
        <AnimatedSection>
          <h3 style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 28 }}>
            <FaCode style={{ color: '#6366f1', marginRight: 8, verticalAlign: 'middle' }} />
            Online Judge Profiles
          </h3>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20, marginBottom: 64 }}>
          {profiles.map((p, i) => (
            <motion.div
              key={p.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="glow-card"
              style={{ padding: 24 }}
            >
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${p.color}20`, border: `1px solid ${p.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', color: p.color,
                }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.95rem' }}>{p.platform}</div>
                  <div style={{ color: '#475569', fontSize: '0.78rem', fontFamily: 'Fira Code, monospace' }}>{p.handle}</div>
                </div>
              </div>
              {p.stats.map(stat => (
                <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{stat.label}</span>
                  <span style={{ color: p.color, fontWeight: 700, fontSize: '0.88rem', fontFamily: 'Fira Code, monospace' }}>{stat.value}</span>
                </div>
              ))}
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center',
                marginTop: 14, padding: '8px', borderRadius: 8,
                background: `${p.color}15`, border: `1px solid ${p.color}30`,
                color: p.color, fontSize: '0.78rem', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = `${p.color}25`}
                onMouseLeave={e => e.currentTarget.style.background = `${p.color}15`}
              >
                <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} /> View Profile
              </a>
            </motion.div>
          ))}
        </div>

        {/* Hackathons */}
        <AnimatedSection>
          <h3 style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 28 }}>
            <FaTrophy style={{ color: '#f59e0b', marginRight: 8, verticalAlign: 'middle' }} />
            Hackathon Achievements
          </h3>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glow-card"
              style={{ padding: 24, display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                background: `${h.color}20`, border: `1px solid ${h.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
              }}>
                <FaTrophy style={{ color: h.color }} />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
                  <h4 style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1rem' }}>{h.name}</h4>
                  <span style={{ color: '#475569', fontSize: '0.78rem' }}>{h.date}</span>
                </div>
                <p style={{ color: h.color, fontWeight: 600, fontSize: '0.85rem', marginBottom: 6 }}>{h.result}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 12, lineHeight: 1.6 }}>{h.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {h.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px', borderRadius: 6,
                      background: `${h.color}10`, border: `1px solid ${h.color}30`,
                      fontSize: '0.72rem', color: h.color, fontFamily: 'Fira Code, monospace',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
